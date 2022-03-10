/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Food-x API REST_FULL')
    .setDescription(
      'O **FoodX** é uma plataforma WEB e MOBILE para compra de qualquer tipo de comida ou bebida, isso fica a preferência do usuário.',
    )
    .setVersion('1.0.0')
    .addTag('Food-x')
    .addBearerAuth({
      type: 'apiKey',
      name: 'Token',
      in: 'Seta o token',
    })
    .setContact('Smart Innovation', '', 'suporte@smartinnovation.com.br')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
