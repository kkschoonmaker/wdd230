const apiKey = '8662d8ba5d4e6465a1a523cb2cc6a7ea';
const city = 'ColoradoSprings';

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;

    //Update HTML elements with weather data
    document.getElementById(
      'current-temperature'
    ).textContent = `Current Temerature: ${temperature}℉;`;
    document.getElementById(
      'wind-speed'
    ).textContent = `Wind Speed: ${windSpeed} m/s`;
    document.getElementById(
      'weather-description'
    ).textContent = `Weather: ${weatherDescription}`;
  });

.catch(error => {crossOriginIsolated.error('Error fetching weather data:', eroor)
})
