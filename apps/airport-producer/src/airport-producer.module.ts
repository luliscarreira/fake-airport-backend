import { Module } from '@nestjs/common';
import { AirportProducerController } from './airport-producer.controller';
import { AirportProducerService } from './airport-producer.service';

@Module({
  imports: [],
  controllers: [AirportProducerController],
  providers: [AirportProducerService],
})
export class AirportProducerModule {}
