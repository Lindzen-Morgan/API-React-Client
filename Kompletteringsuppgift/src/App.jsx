import { useState, useEffect } from 'react';
import '/App.css'; 

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data when the component mounts
    // Replace 'API_ENDPOINT' with the actual endpoint to fetch weather data
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
