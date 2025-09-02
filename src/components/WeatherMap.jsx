import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FaMapMarkerAlt } from 'react-icons/fa'
import 'leaflet/dist/leaflet.css'
import './WeatherMap.css'

// Fix for default markers in react-leaflet
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const WeatherMap = ({ city, weatherData }) => {
  const [position, setPosition] = useState([51.505, -0.09]) // Default to London

  useEffect(() => {
    if (weatherData && weatherData.coord) {
      setPosition([weatherData.coord.lat, weatherData.coord.lon])
    }
  }, [weatherData])

  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div class="marker-content"><i class="fa fa-map-marker-alt"></i></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
  })

  return (
    <div className="weather-map">
      <h3 className="map-title">Weather Map</h3>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={10}
          style={{ height: '400px', width: '100%' }}
          className="leaflet-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="map-popup">
                <h4>{city}</h4>
                {weatherData && (
                  <>
                    <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default WeatherMap
