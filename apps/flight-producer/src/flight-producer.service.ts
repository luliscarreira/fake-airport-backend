import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightProducerService {
  getHello(): string {
    return 'Hello World!';
  }
}
