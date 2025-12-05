# Weather App

A full-stack weather application built with Node.js/Express backend and React frontend, using the OpenWeatherMap API.

## Project Structure

```
weather-app/
├── server/          # Express backend (TypeScript)
│   ├── src/
│   │   ├── config/      # Configuration (API key injection)
│   │   ├── controllers/ # Business logic
│   │   ├── routes/      # API routes
│   │   └── server.ts    # Main server entry point
│   ├── package.json
│   └── tsconfig.json
└── frontend/        # React frontend (TypeScript + Vite)
    ├── src/
    ├── package.json
    └── vite.config.ts
```

## Prerequisites

- Node.js >= 18
- pnpm (package manager)
- OpenWeatherMap API key (get one at https://openweathermap.org/api)

## Setup

### Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenWeatherMap API key to the `.env` file:
   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

The server will start on `http://localhost:3000`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The frontend will start on `http://localhost:5173`.

## API Endpoints

### GET /api/weather/current
Get current weather for a city.

Query Parameters:
- `city` (required): City name
- `units` (optional): Units of measurement (`metric`, `imperial`). Defaults to `metric`.

Example:
```bash
curl "http://localhost:3000/api/weather/current?city=London&units=metric"
```

### GET /api/weather/forecast
Get 5-day weather forecast for a city.

Query Parameters:
- `city` (required): City name
- `units` (optional): Units of measurement (`metric`, `imperial`). Defaults to `metric`.

Example:
```bash
curl "http://localhost:3000/api/weather/forecast?city=London&units=metric"
```

### GET /health
Health check endpoint.

## Technology Stack

### Backend
- Node.js
- Express.js
- TypeScript
- dotenv (environment variables)
- cors (Cross-Origin Resource Sharing)

### Frontend
- React >= 19.2
- TypeScript
- Vite (build tool)
- pnpm (package manager)