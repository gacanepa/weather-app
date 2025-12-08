export interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface ForecastItem {
  dt: number;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface ForecastData {
  city: string;
  list: ForecastItem[];
}
  
// OpenWeatherMap API response types
export interface OpenWeatherMapCurrentResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export interface OpenWeatherMapForecastResponse {
  city: {
    name: string;
  };
  list: Array<{
    dt: number;
    main: {
      temp: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
    };
  }>;
}

export interface ApiErrorResponse {
  message?: string;
}
