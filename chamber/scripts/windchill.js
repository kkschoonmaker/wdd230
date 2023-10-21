let temp = document.querySelector('#temp').textContent;
let wind = document.querySelector('#wind').textContent;

function windChill(temp, wind) {
  return Math.round(
    35.74 +
      0.6215 * temp -
      35.75 * Math.pow(wind, 0.16) +
      0.4275 * temp * Math.pow(wind, 0.16)
  );
}

if (temp <= 50 && wind > 3.0) {
  let wc = windChill(temp, wind);
  document.getElementById('wind-chill').innerHTML = `${wc}℉`;
} else {
  document.getElementById('wind-chill').innerHTML = 'N/A';
}
