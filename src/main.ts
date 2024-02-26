import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import env from '@config/env';
import { Logger } from '@nestjs/common';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('NestApplication');
  const port = env().application.port;
  const globalPrefix = 'api/v1';

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Whatsapp POC')
    .setDescription('Integration with WhatApp API')
    .addBearerAuth(
      {
        type: 'http',
        schema: 'Bearer',
        bearerFormat: 'Token',
      } as SecuritySchemeObject,
      'Bearer',
    )
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (env().application.stage === 'development') {
    SwaggerModule.setup(`${globalPrefix}/docs`, app, document);
  }

  await app.listen(port, () => logger.log(`API is running on port ${port}`));
}
bootstrap();
