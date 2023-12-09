let tempClose = document.querySelector('.temp-close-btn');
let tempMessage = document.querySelector('#temp-alert');
let highTemp = document.querySelector('#high-temp');

alertClose.addEventListener('click', () => {
  message.style.display = 'none';
});

const tempURL =
  'https://api.openweathermap.org/data/2.5/weather?lat=20.81&lon=-86.95&units=imperial&appid=8662d8ba5d4e6465a1a523cb2cc6a7ea';

async function tempFetch() {
  try {
    const response = await fetch(tempURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayHighTemp(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayHighTemp(data) {
  let tempMax = data.main.temp_max;

  highTemp.innerHTML = `Today in Cozumel, it is forecasted to reach a high of ${Math.round(
    tempMax
  )}&deg;F`;

  tempClose.addEventListener('click', () => {
    tempMessage.style.display = 'none';
  });
}

tempFetch();
