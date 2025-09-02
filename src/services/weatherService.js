// src/services/weatherService.js
import { config } from '../config.js';

const API_KEY = config.OPENWEATHERMAP_API_KEY;
const BASE_URL = config.OPENWEATHERMAP_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw new Error(`Failed to fetch weather data for ${city}: ${error.message}`);
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw new Error(`Failed to fetch forecast data for ${city}: ${error.message}`);
  }
};

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

export const fetchForecastByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching forecast by coordinates:', error);
    throw new Error(`Failed to fetch forecast data: ${error.message}`);
  }
};