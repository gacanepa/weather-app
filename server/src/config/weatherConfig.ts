import dotenv from 'dotenv';

// Load environment variables before accessing them
dotenv.config();

export interface WeatherConfig {
  apiKey: string;
  baseUrl: string;
}

export const weatherConfig: WeatherConfig = {
  apiKey: process.env.OPENWEATHERMAP_API_KEY || '',
  baseUrl: 'https://api.openweathermap.org/data/2.5'
};
