
import React from 'react'
import { 
  FaThermometerHalf, 
  FaTint, 
  FaWind, 
  FaEye, 
  FaSun, 
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaBolt
} from 'react-icons/fa'
import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
  // Add data validation
  if (!data || !data.weather || !data.main) {
    console.error('Invalid weather data received:', data);
    return (
      <div className="current-weather">
        <div style={{textAlign: 'center', padding: '20px'}}>
          <p>Error: Invalid weather data received</p>
          <pre style={{fontSize: '12px', overflow: 'auto'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  }

  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) return <FaBolt className="weather-icon thunderstorm" />
    if (weatherId >= 300 && weatherId < 500) return <FaCloudRain className="weather-icon drizzle" />
    if (weatherId >= 500 && weatherId < 600) return <FaCloudRain className="weather-icon rain" />
    if (weatherId >= 600 && weatherId < 700) return <FaSnowflake className="weather-icon snow" />
    if (weatherId >= 700 && weatherId < 800) return <FaCloud className="weather-icon atmosphere" />
    if (weatherId === 800) return <FaSun className="weather-icon clear" />
    return <FaCloud className="weather-icon clouds" />
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="weather-icon-container">
          {getWeatherIcon(data.weather[0].id)}
        </div>
        <div className="weather-info">
          <h2 className="city-name">{data.name}, {data.sys.country}</h2>
          <p className="weather-description">{data.weather[0].description}</p>
          <div className="temperature">
            <span className="temp-value">{Math.round(data.main.temp)}°C</span>
            <span className="temp-feels-like">Feels like {Math.round(data.main.feels_like)}°C</span>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <FaThermometerHalf className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Temperature</span>
            <span className="detail-value">{Math.round(data.main.temp)}°C</span>
          </div>
        </div>

        <div className="detail-item">
          <FaTint className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <FaWind className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
        </div>

        <div className="detail-item">
          <FaEye className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{(data.visibility / 1000).toFixed(1)} km</span>
          </div>
        </div>

        <div className="detail-item">
          <FaThermometerHalf className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{data.main.pressure} hPa</span>
          </div>
        </div>

        <div className="detail-item">
          <FaSun className="detail-icon" />
          <div className="detail-info">
            <span className="detail-label">Sunrise</span>
            <span className="detail-value">{formatTime(data.sys.sunrise)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
