import { NestFactory } from '@nestjs/core';
import { connectDatabase } from './setup';
import { AppModule } from './app.module';

const bootstrap = async () => {
  connectDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};
bootstrap();
