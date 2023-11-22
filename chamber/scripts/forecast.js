let dayOne = document.querySelector('#day1');
let dayTwo = document.querySelector('#day2');
let dayThree = document.querySelector('#day3');
let dayOneName = document.querySelector('#day1name');
let dayTwoName = document.querySelector('#day2name');
let dayThreeName = document.querySelector('#day3name');

const url2 =
  'https://api.openweathermap.org/data/2.5/forecast?lat=38.83&lon=-104.83&units=imperial&appid=8662d8ba5d4e6465a1a523cb2cc6a7ea';

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
let dateTwo = new Date();
let dateThree = new Date();

dateOne.setDate(dateOne.getDate() + 1);
dateOne = dateOne.toLocaleDateString('en-us', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

dateTwo.setDate(dateTwo.getDate() + 2);
dateTwo = dateTwo.toLocaleDateString('en-us', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

dateThree.setDate(dateThree.getDate() + 3);
dateThree = dateThree.toLocaleDateString('en-us', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

// let dateOne = dateZero.setDate(new Date().getDate() + 1);

function displayForecast(data) {
  dayOne.innerHTML = `${Math.round(data.list[2].main.temp)}&deg;F`;
  dayTwo.innerHTML = `${Math.round(data.list[10].main.temp)}&deg;F`;
  dayThree.innerHTML = `${Math.round(data.list[18].main.temp)}&deg;F`;

  dayOneName.innerHTML = dateOne;
  dayTwoName.innerHTML = dateTwo;
  dayThreeName.innerHTML = dateThree;
}

apiFetch();

// .toLocaleDateString('en-us', {
//   weekday: 'short',
//   month: 'short',
//   day: 'numeric', });
