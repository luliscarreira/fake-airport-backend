import { Test, TestingModule } from '@nestjs/testing';
import { FlightProducerController } from './flight-producer.controller';
import { FlightProducerService } from './flight-producer.service';

describe('FlightProducerController', () => {
  let flightProducerController: FlightProducerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlightProducerController],
      providers: [FlightProducerService],
    }).compile();

    flightProducerController = app.get<FlightProducerController>(FlightProducerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(flightProducerController.getHello()).toBe('Hello World!');
    });
  });
});
