import { ValidationError, ValidatorOptions } from 'class-validator';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}

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

  return {
    statusCode: 400,
    message:
      'Houve um problema com os dados enviados. Por favor, corrija os seguintes campos:',
    erros: formatErrors(errors),
    timestamp: new Date().toISOString(),
  };
};
