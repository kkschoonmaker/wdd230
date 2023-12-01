let alertClose = document.querySelector('.closebtn');
let message = document.querySelector('#weather-alert');
  let activeAlert = document.querySelector('#current-alert');

  alertClose.addEventListener('click', () => {
    message.style.display = 'none';
  });

  // Live Weather input
  const urlAlert = 'https://api.weather.gov/alerts/active?point=20.17,-81.52';

  async function alertFetch() {
    try {
      const response = await fetch(urlAlert);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayAlert(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

  function displayAlert(data) {
    if (data.features.length != 0) {
      let alertText = data.features[0].properties.event;

      message.style.display = 'block';

      activeAlert.innerHTML = `<strong>WEATHER WARNING:</strong> There is a current ${alertText} in our area.`;
    }
  }

  alertFetch();

  