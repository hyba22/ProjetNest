import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Angular frontend
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from Angular
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Include necessary methods
    allowedHeaders: 'Content-Type,Authorization', // Allow common headers
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();