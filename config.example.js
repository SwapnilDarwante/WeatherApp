// Configuration file for Weather Dashboard
// Copy this file to config.js and update with your actual values

export const config = {
  // OpenWeatherMap API Configuration
  // Get your API key from: https://openweathermap.org/api
  OPENWEATHERMAP_API_KEY: 'your_api_key_here',
  
  // API Base URL (usually don't need to change this)
  OPENWEATHERMAP_BASE_URL: 'https://api.openweathermap.org/data/2.5',
  
  // Weather Units (metric, imperial, or kelvin)
  WEATHER_UNITS: 'metric',
  
  // Default City (optional)
  DEFAULT_CITY: 'London',
  
  // Map Configuration
  MAP_DEFAULT_ZOOM: 10,
  MAP_TILE_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  
  // Chart Configuration
  CHART_COLORS: {
    temperature: 'rgba(255, 99, 132, 1)',
    humidity: 'rgba(54, 162, 235, 1)',
    wind: 'rgba(75, 192, 192, 1)',
    pressure: 'rgba(255, 159, 64, 1)'
  }
}

// Usage:
// 1. Copy this file to config.js
// 2. Update the OPENWEATHERMAP_API_KEY with your actual API key
// 3. Import and use in your components: import { config } from './config.js'
