import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { WeatherConfig } from '@/config/weatherConfig';
import {
  ApiErrorResponse,
  OpenWeatherMapCurrentResponse,
  OpenWeatherMapForecastResponse,
  WeatherData,
  ForecastData,
} from '@/controllers/types';

export class WeatherController {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: WeatherConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  async getCurrentWeather(req: Request, res: Response): Promise<void> {
    try {
      const { city, units = 'metric' } = req.query;

      if (!city || typeof city !== 'string') {
        res.status(StatusCodes.BAD_REQUEST).json({
          error: ReasonPhrases.BAD_REQUEST,
        });
        return;
      }

      if (!this.apiKey) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
        return;
      }

      const url = `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=${units}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json() as ApiErrorResponse;
        res.status(response.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: errorData.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
        return;
      }

      const data = await response.json() as OpenWeatherMapCurrentResponse;
      
      const weatherData: WeatherData = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
      };

      res.status(StatusCodes.OK).json(weatherData);
    } catch (error) {
      console.error('Error fetching current weather:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async getForecast(req: Request, res: Response): Promise<void> {
    try {
      const { city, units = 'metric' } = req.query;

      if (!city || typeof city !== 'string') {
        res.status(StatusCodes.BAD_REQUEST).json({
          error: ReasonPhrases.BAD_REQUEST,
        });
        return;
      }

      if (!this.apiKey) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
        return;
      }

      const url = `${this.baseUrl}/forecast?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=${units}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json() as ApiErrorResponse;
        res.status(response.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: errorData.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
        return;
      }

      const data = await response.json() as OpenWeatherMapForecastResponse;
      
      const forecastData: ForecastData = {
        city: data.city.name,
        list: data.list.map((item) => ({
          dt: item.dt,
          temperature: item.main.temp,
          description: item.weather[0].description,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          icon: item.weather[0].icon
        }))
      };

      res.status(StatusCodes.OK).json(forecastData);
    } catch (error) {
      console.error('Error fetching forecast:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
