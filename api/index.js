const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API is up and running!');
});

// Weather route
app.get('/weather/stockholm', (req, res) => {
  // Mock weather data
  const weatherData = {
    temperature: 15,
    humidity: 60,
    wind: '5 m/s',
  };

  res.json(weatherData);
});

module.exports = app; //Export to express app
