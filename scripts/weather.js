const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=38.83&lon=-104.83&units=imperial&appid=8662d8ba5d4e6465a1a523cb2cc6a7ea';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  //   Capitalize Description Words
  const words = desc.split(' ');
  let desc2 = '';
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    desc2 = `${desc2} ${words[i]}`;
  }

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].main);
  captionDesc.textContent = `${desc2}`;
}

apiFetch();
