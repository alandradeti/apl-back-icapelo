import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';

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

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      message = this.getErrorMessage(exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    } else if (exception instanceof QueryFailedError) {
      httpStatus = HttpStatus.CONFLICT;
      message = this.getQueryErrorMessage(exception);
      responseBody = this.createErrorResponse(httpStatus, message);
    } else if (exception instanceof Error) {
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

    httpAdapter.reply(response, responseBody, httpStatus);
  }

  private createErrorResponse(statusCode: number, message: string) {
    return {
      statusCode,
      timestamp: new Date().toISOString(),
      message,
    };
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

  private getQueryErrorMessage(exception: QueryFailedError): string {
    if (exception.message.includes('duplicate key value')) {
      return 'Conflito de dados: chave duplicada';
    }
    return exception.message || 'Erro ao executar consulta no banco de dados';
  }
}
