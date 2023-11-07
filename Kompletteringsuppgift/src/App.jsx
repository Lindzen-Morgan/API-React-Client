import { useState, useEffect } from 'react';
import './App.css';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    //placeholder URL API ENDPOINT
    fetch('API_ENDPOINT')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather:', error));
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      {weatherData ? (
        <div className="weather-info">
          <h2>Stockholm Weather</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} km/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherApp;
