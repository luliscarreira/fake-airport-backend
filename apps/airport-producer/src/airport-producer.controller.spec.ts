import { Test, TestingModule } from '@nestjs/testing';
import { AirportProducerController } from './airport-producer.controller';
import { AirportProducerService } from './airport-producer.service';

describe('AirportProducerController', () => {
  let airportProducerController: AirportProducerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AirportProducerController],
      providers: [AirportProducerService],
    }).compile();

    airportProducerController = app.get<AirportProducerController>(AirportProducerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(airportProducerController.getHello()).toBe('Hello World!');
    });
  });
});
