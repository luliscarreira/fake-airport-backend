import { Module } from '@nestjs/common';
import { WeatherProducerController } from './weather-producer.controller';
import { WeatherProducerService } from './weather-producer.service';

@Module({
  imports: [],
  controllers: [WeatherProducerController],
  providers: [WeatherProducerService],
})
export class WeatherProducerModule {}
