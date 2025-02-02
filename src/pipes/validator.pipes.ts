import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export const defaultExceptionFactory = (errors: ValidationError[]) => {
  const formatErrors = (errors: ValidationError[]) => {
    return errors.map((error) => {
      const problemas = error.constraints
        ? Object.values(error.constraints)
        : [];
      const detalhes = error.children?.length
        ? formatErrors(error.children)
        : [];

      return {
        campo: error.property,
        problemas,
        ...(detalhes.length > 0 && { detalhes }),
      };
    });
  };

  const errorResponse = {
    statusCode: 400,
    message:
      'Houve um problema com os dados enviados. Por favor, corrija os seguintes campos:',
    erros: formatErrors(errors),
    timestamp: new Date().toISOString(),
  };

  return new BadRequestException(errorResponse);
};
