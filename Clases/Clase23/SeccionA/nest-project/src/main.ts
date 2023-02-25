import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docOptions = new DocumentBuilder()
    .setTitle('cats documentation')
    .setVersion('1.0.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, docOptions);

  SwaggerModule.setup('/api/documentation', app, document);

  await app.listen(3000);
}
bootstrap();