let dayOne = document.querySelector('#day1');

let dayOneName = document.querySelector('#day1name');

const url2 =
  'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&appid=8662d8ba5d4e6465a1a523cb2cc6a7ea';

async function apiFetch() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();

      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

let dateOne = new Date();

dateOne.setDate(dateOne.getDate() + 1);
dateOne = dateOne.toLocaleDateString('en-us', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

function displayForecast(data) {
  dayOne.innerHTML = `${Math.round(data.list[2].main.temp)}&deg;F`;
  dayOneName.innerHTML = dateOne;
}

apiFetch();

// .toLocaleDateString('en-us', {
//   weekday: 'short',
//   month: 'short',
//   day: 'numeric', });
