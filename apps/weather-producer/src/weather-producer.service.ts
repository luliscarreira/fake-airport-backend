import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherProducerService {
  getHello(): string {
    return 'Hello World!';
  }
}
