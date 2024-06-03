import { Module } from '@nestjs/common';
import { FlightProducerController } from './flight-producer.controller';
import { FlightProducerService } from './flight-producer.service';

@Module({
  imports: [],
  controllers: [FlightProducerController],
  providers: [FlightProducerService],
})
export class FlightProducerModule {}
