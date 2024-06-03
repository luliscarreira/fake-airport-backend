import { Controller, Get } from '@nestjs/common';
import { WeatherProducerService } from './weather-producer.service';

@Controller()
export class WeatherProducerController {
  constructor(private readonly weatherProducerService: WeatherProducerService) {}

  @Get()
  getHello(): string {
    return this.weatherProducerService.getHello();
  }
}
