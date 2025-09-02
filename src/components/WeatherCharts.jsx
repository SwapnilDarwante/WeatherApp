import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import './WeatherCharts.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const WeatherCharts = ({ forecastData }) => {
  // Add data validation
  if (!forecastData || !forecastData.list) {
    console.error('Invalid forecast data received in WeatherCharts:', forecastData);
    return (
      <div className="weather-charts">
        <div style={{textAlign: 'center', padding: '20px'}}>
          <p>Error: Invalid forecast data received</p>
          <pre style={{fontSize: '12px', overflow: 'auto'}}>{JSON.stringify(forecastData, null, 2)}</pre>
        </div>
      </div>
    );
  }

  const prepareChartData = () => {
    if (!forecastData || !forecastData.list) return { labels: [], temperatures: [], humidity: [] }

    const data = forecastData.list.slice(0, 24) // 24 hours of data
    const labels = data.map(item => {
      const date = new Date(item.dt * 1000)
      return date.toLocaleTimeString('en-US', { hour: '2-digit', hour12: true })
    })
    
    const temperatures = data.map(item => Math.round(item.main.temp))
    const humidity = data.map(item => item.main.humidity)

    return { labels, temperatures, humidity }
  }

  const { labels, temperatures, humidity } = prepareChartData()

  const temperatureChartData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4
      }
    ]
  }

  const humidityChartData = {
    labels,
    datasets: [
      {
        label: 'Humidity (%)',
        data: humidity,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: '#666',
          maxRotation: 45,
          autoSkip: true,
          maxTicksLimit: 8
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: '#666'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }

  return (
    <div className="weather-charts">
      <h3 className="charts-title">Weather Trends</h3>
      <div className="charts-container">
        <div className="chart-wrapper">
          <h4>24-Hour Temperature Trend</h4>
          <div className="chart-container">
            <Line data={temperatureChartData} options={chartOptions} />
          </div>
        </div>
        
        <div className="chart-wrapper">
          <h4>24-Hour Humidity Trend</h4>
          <div className="chart-container">
            <Bar data={humidityChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCharts
