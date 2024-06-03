import { Controller, Get } from '@nestjs/common';
import { AirportProducerService } from './airport-producer.service';

@Controller()
export class AirportProducerController {
  constructor(private readonly airportProducerService: AirportProducerService) {}

  @Get()
  getHello(): string {
    return this.airportProducerService.getHello();
  }
}
