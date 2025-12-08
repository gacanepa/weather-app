import { Router } from 'express';
import { WeatherController } from '@/controllers/weatherController';
import { weatherConfig } from '@/config/weatherConfig';

const router: Router = Router();

// Inject API key into controller
const weatherController = new WeatherController(weatherConfig);

// Get current weather by city name
router.get('/current', (req, res) => weatherController.getCurrentWeather(req, res));

// Get weather forecast by city name
router.get('/forecast', (req, res) => weatherController.getForecast(req, res));

export default router;
