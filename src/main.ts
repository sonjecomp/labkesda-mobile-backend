import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

// types/common.d.ts
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return String(this);
};

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Labkesda Mobile API')
    .setDescription('Endpoint API untuk aplikasi mobile Labkesda')
    .setVersion('1.0')
    .addTag('labkesda')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  logger.log(
    `Application listening on http://localhost:${
      app.getHttpServer().address().port
    }`,
  );
}
bootstrap();
