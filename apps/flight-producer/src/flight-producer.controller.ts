import { Controller, Get } from '@nestjs/common';
import { FlightProducerService } from './flight-producer.service';

@Controller()
export class FlightProducerController {
  constructor(private readonly flightProducerService: FlightProducerService) {}

  @Get()
  getHello(): string {
    return this.flightProducerService.getHello();
  }
}
