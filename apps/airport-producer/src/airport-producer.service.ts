import { Injectable } from '@nestjs/common';
import { Airport } from '@types';

@Injectable()
export class AirportProducerService {
  getHello(): string {
    return 'Hello World!';
  }

  generateAirport(): Airport {}
}
