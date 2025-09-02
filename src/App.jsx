// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import CurrentWeather from './components/CurrentWeather.jsx';
import Forecast from './components/Forecast.jsx';
import WeatherCharts from './components/WeatherCharts.jsx';
import WeatherMap from './components/WeatherMap.jsx';
import { fetchWeatherData, fetchForecastData, fetchWeatherByCoords, fetchForecastByCoords } from './services/weatherService.js';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  // Get user's current location on first visit
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Location access denied, using default city');
          setCity('London');
        }
      );
    } else {
      setCity('London');
    }
  }, []);

  // Fetch weather for user's location or default city
  useEffect(() => {
    if (userLocation) {
      fetchWeatherDataForLocation(userLocation.lat, userLocation.lon);
    } else if (city) {
      fetchWeatherDataForCity(city);
    }
  }, [userLocation, city]);

  const fetchWeatherDataForLocation = async (lat, lon) => {
    setLoading(true);
    setError(null);

    try {
      const [current, forecast] = await Promise.all([
        fetchWeatherByCoords(lat, lon),
        fetchForecastByCoords(lat, lon),
      ]);


      
      setWeatherData(current);
      setForecastData(forecast);
      setCity(current.name); // Set city name from coordinates
    } catch (err) {
      setError(err.message);
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherDataForCity = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const [current, forecast] = await Promise.all([
        fetchWeatherData(cityName),
        fetchForecastData(cityName),
      ]);


      
      setWeatherData(current);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    setUserLocation(null); // Clear user location when searching for a city
    fetchWeatherDataForCity(searchCity);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>{userLocation ? 'Loading weather for your location...' : 'Loading weather data...'}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ Weather Dashboard</h1>
        <p>Get real-time weather information and forecasts</p>
      
      </header>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      <main className="app-main">
        {weatherData ? (
          <>

            
            {/* First card - Current Weather (Horizontal layout) */}
            <div className="current-weather-section">
              <CurrentWeather data={weatherData} />
            </div>
            
            {/* Other cards section */}
            <div className="other-cards-section">
              <div className="cards-row">
                <Forecast data={forecastData} />
                <WeatherCharts forecastData={forecastData} />
              </div>
              <WeatherMap city={city} weatherData={weatherData} />
            </div>
          </>
        ) : (
          <div style={{textAlign: 'center', color: 'white', padding: '50px'}}>
            <p>No weather data available. Please search for a city or allow location access.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by OpenWeatherMap API</p>
      </footer>

      {userLocation && (
        <button
          className="location-refresh-btn"
          onClick={() => fetchWeatherDataForLocation(userLocation.lat, userLocation.lon)}
          title="Refresh current location weather"
        >
          🔄
        </button>
      )}
    </div>
  );
}

export default App;