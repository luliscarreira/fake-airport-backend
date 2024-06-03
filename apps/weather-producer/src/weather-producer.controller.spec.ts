import { Test, TestingModule } from '@nestjs/testing';
import { WeatherProducerController } from './weather-producer.controller';
import { WeatherProducerService } from './weather-producer.service';

describe('WeatherProducerController', () => {
  let weatherProducerController: WeatherProducerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WeatherProducerController],
      providers: [WeatherProducerService],
    }).compile();

    weatherProducerController = app.get<WeatherProducerController>(WeatherProducerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(weatherProducerController.getHello()).toBe('Hello World!');
    });
  });
});
