# 🌤️ Weather Dashboard

A modern, responsive React-based weather dashboard application that provides real-time weather information, forecasts, interactive charts, and maps using the OpenWeatherMap API.

## ✨ Features

- **Current Weather Display**: Real-time weather conditions with detailed information
- **5-Day Forecast**: Extended weather predictions with daily breakdowns
- **Interactive Charts**: Temperature and humidity trends using Chart.js
- **Interactive Map**: Location-based weather map using Leaflet.js
- **Search Functionality**: Search for any city worldwide
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and glassmorphism effects
- **Real-time Updates**: Live weather data from OpenWeatherMap API

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Chart.js** - Interactive charts and data visualization
- **Leaflet.js** - Interactive maps
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with animations and responsive design
- **OpenWeatherMap API** - Weather data provider

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WeatherDashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key
   - Copy your API key

4. **Configure API Key**
   - Open `src/services/weatherService.js`
   - Replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual API key
   ```javascript
   const API_KEY = 'your_actual_api_key_here'
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app should now be running!

## 🎯 Usage

1. **Search for a City**: Use the search bar to find any city worldwide
2. **View Current Weather**: See real-time temperature, humidity, wind speed, and more
3. **Check Forecast**: Browse the 5-day weather forecast
4. **Analyze Trends**: View temperature and humidity charts
5. **Explore Map**: Interactive map showing the selected location

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes
- Smooth animations and transitions

## 🎨 UI Features

- **Gradient Backgrounds**: Beautiful color schemes
- **Glassmorphism Effects**: Modern glass-like UI elements
- **Smooth Animations**: Fade-in effects and hover animations
- **Icon Integration**: Weather-specific icons for different conditions
- **Color-coded Elements**: Intuitive color schemes for weather data

## 🔧 Customization

### Styling
- Modify colors in CSS variables
- Adjust animations and transitions
- Customize component layouts

### API Configuration
- Change weather units (metric/imperial)
- Modify API endpoints
- Add additional weather data sources

### Charts
- Customize chart colors and styles
- Add more chart types
- Modify data visualization options

## 📊 API Endpoints Used

- **Current Weather**: `/weather` - Real-time weather data
- **5-Day Forecast**: `/forecast` - Extended weather predictions
- **Geocoding**: City name to coordinates conversion

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Chart.js](https://www.chartjs.org/) for data visualization
- [Leaflet](https://leafletjs.com/) for interactive maps
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons

## 📞 Support

If you encounter any issues or have questions:
- Check the [Issues](https://github.com/yourusername/WeatherDashboard/issues) page
- Create a new issue with detailed information
- Contact the development team

## 🔮 Future Enhancements

- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Multiple language support
- [ ] Dark/Light theme toggle
- [ ] Weather widgets for other websites
- [ ] Offline functionality with service workers
- [ ] Push notifications for severe weather

---

**Happy Weather Watching! 🌦️**
