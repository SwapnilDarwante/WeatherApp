import React from 'react'
import { 
  FaSun, 
  FaCloud, 
  FaCloudRain, 
  FaSnowflake, 
  FaBolt,
  FaThermometerHalf,
  FaTint,
  FaWind
} from 'react-icons/fa'
import './Forecast.css'

const Forecast = ({ data }) => {
  // Add data validation
  if (!data || !data.list) {
    console.error('Invalid forecast data received:', data);
    return (
      <div className="forecast">
        <div style={{textAlign: 'center', padding: '20px'}}>
          <p>Error: Invalid forecast data received</p>
          <pre style={{fontSize: '12px', overflow: 'auto'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  }

  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) return <FaBolt className="forecast-icon thunderstorm" />
    if (weatherId >= 300 && weatherId < 500) return <FaCloudRain className="forecast-icon drizzle" />
    if (weatherId >= 500 && weatherId < 600) return <FaCloudRain className="forecast-icon rain" />
    if (weatherId >= 600 && weatherId < 700) return <FaSnowflake className="forecast-icon snow" />
    if (weatherId >= 700 && weatherId < 800) return <FaCloud className="forecast-icon atmosphere" />
    if (weatherId === 800) return <FaSun className="forecast-icon clear" />
    return <FaCloud className="forecast-icon clouds" />
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const getDailyForecast = () => {
    const dailyData = {}
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString()
      if (!dailyData[date]) {
        dailyData[date] = {
          date: item.dt,
          temp: item.main.temp,
          feels_like: item.main.feels_like,
          humidity: item.main.humidity,
          wind_speed: item.wind.speed,
          weather: item.weather[0],
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max
        }
      } else {
        // Update with max/min temperatures
        dailyData[date].temp_min = Math.min(dailyData[date].temp_min, item.main.temp_min)
        dailyData[date].temp_max = Math.max(dailyData[date].temp_max, item.main.temp_max)
      }
    })

    return Object.values(dailyData).slice(0, 5)
  }

  const dailyForecast = getDailyForecast()

  return (
    <div className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-container">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-date">{formatDate(day.date)}</div>
            <div className="forecast-icon-wrapper">
              {getWeatherIcon(day.weather.id)}
            </div>
            <div className="forecast-description">{day.weather.description}</div>
            <div className="forecast-temp">
              <span className="temp-max">{Math.round(day.temp_max)}°</span>
              <span className="temp-min">{Math.round(day.temp_min)}°</span>
            </div>
            <div className="forecast-details">
              <div className="forecast-detail">
                <FaTint className="detail-icon" />
                <span>{day.humidity}%</span>
              </div>
              <div className="forecast-detail">
                <FaWind className="detail-icon" />
                <span>{Math.round(day.wind_speed)} m/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
