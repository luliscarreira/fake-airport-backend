import { NestFactory } from '@nestjs/core';
import { WeatherProducerModule } from './weather-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(WeatherProducerModule);
  await app.listen(3000);
}
bootstrap();
