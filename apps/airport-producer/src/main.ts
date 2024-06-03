import { NestFactory } from '@nestjs/core';
import { AirportProducerModule } from './airport-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(AirportProducerModule);
  await app.listen(3000);
}
bootstrap();
