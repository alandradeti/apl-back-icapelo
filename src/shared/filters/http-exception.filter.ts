import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';
import { BadRequestException } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const httpArgumentsHost = host.switchToHttp();
    const response = httpArgumentsHost.getResponse();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erro interno do servidor';
    let responseBody: any = {};

    // Verifica se a exceção é do tipo HttpException
    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      message = this.getErrorMessage(exception);

      // Se for BadRequestException, utiliza a resposta já formatada
      if (exception instanceof BadRequestException) {
        responseBody = exception.getResponse(); // Retorna a resposta formatada do ValidationPipe
      } else {
        const validationErrors = this.getValidationErrors(exception);
        responseBody = this.createErrorResponse(
          httpStatus,
          message,
          validationErrors,
        );
      }
    } else if (exception instanceof QueryFailedError) {
      // Erro de banco de dados (conflito)
      httpStatus = HttpStatus.CONFLICT;
      message = this.getQueryErrorMessage(exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    } else if (exception instanceof Error) {
      // Erros inesperados
      message = exception.message;
      if (exception.message.includes('validation failed')) {
        httpStatus = HttpStatus.BAD_REQUEST;
        message = 'Erro de validação de dados: ' + exception.message;
      } else if (exception.message.includes('forbidden')) {
        httpStatus = HttpStatus.FORBIDDEN;
        message = 'Acesso negado: ' + exception.message;
      } else if (exception.message.includes('not found')) {
        httpStatus = HttpStatus.NOT_FOUND;
        message = 'Recurso não encontrado: ' + exception.message;
      } else {
        console.error('Erro desconhecido:', exception); // Log detalhado no console
        message = 'Erro inesperado';
      }
      responseBody = this.createErrorResponse(httpStatus, message);
    } else {
      console.error('Exceção não tratada:', exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    }

    // Resposta final
    httpAdapter.reply(response, responseBody, httpStatus);
  }

  private createErrorResponse(
    statusCode: number,
    message: string,
    validationErrors?: any,
  ) {
    const response: any = {
      statusCode,
      timestamp: new Date().toISOString(),
      message,
      description: message, // Adicionando descrição aqui
    };

    // Adicionando erros de validação se existirem
    if (validationErrors && validationErrors.length > 0) {
      response.erros = validationErrors;
    }

    return response;
  }

  private getErrorMessage(exception: HttpException): string {
    const response = exception.getResponse();
    if (typeof response === 'object' && response !== null) {
      if (Array.isArray((response as any).message)) {
        return (response as any).message.join(', ');
      }
      return (response as any).message || 'Erro desconhecido';
    }
    return (response as string) || 'Erro desconhecido';
  }

  private getValidationErrors(exception: HttpException): any[] {
    const response = exception.getResponse();
    if (
      typeof response === 'object' &&
      response !== null &&
      (response as any).message
    ) {
      const message = (response as any).message;

      // Verifica se a mensagem é um array de erros de validação
      if (Array.isArray(message)) {
        return message
          .filter((item: any) => item.field && item.constraints)
          .map((error: any) => ({
            campo: error.field,
            problemas: Object.values(error.constraints),
          }));
      }

      // Se a mensagem não for um array, mas um objeto, verifique se há erros de validação
      if (typeof message === 'object') {
        const validationErrors = Object.values(message).filter(
          (item: any) => item && item.constraints,
        );

        return validationErrors.map((error: any) => ({
          campo: error.property,
          problemas: Object.values(error.constraints),
        }));
      }
    }

    return [];
  }

  private getQueryErrorMessage(exception: QueryFailedError): string {
    if (exception.message.includes('duplicate key value')) {
      return 'Conflito de dados: chave duplicada';
    }
    return exception.message || 'Erro ao executar consulta no banco de dados';
  }
}
