import { NestFactory } from '@nestjs/core';
import { FlightProducerModule } from './flight-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(FlightProducerModule);
  await app.listen(3000);
}
bootstrap();
