import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './shared/filters/http-exception.filter';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { defaultExceptionFactory } from './pipes/validator.pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do filtro de exceção global
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: defaultExceptionFactory,
    }),
  );

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('ICapelo-API')
    .setDescription('ICapelo API - Gestão de provas escolares')
    .setVersion('1.0')
    .addTag('icapelo')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Inicialização do Swagger (Documentação/Requisição) da API

  await app.listen(Number(process.env.PORT_APP) || 3010);
}
bootstrap();
