// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
let theDateToday = Date.now();
let lastVisit = Number(window.localStorage.getItem('visitDate')) || Date.now();
let numDays = (theDateToday - lastVisit) / msToDays;
const visitsDisplay = document.querySelector('.visits');
let numDaysRound = Math.round(numDays);

if (numDays >= 2) {
  visitsDisplay.textContent = `You last visited ${numDaysRound} days ago.`;
} else {
  if (numDays >= 1) {
    visitsDisplay.textContent = `You last visited ${numDaysRound} day ago.`;
  } else {
    if (numDays > 0) {
      visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
      visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
  }
}

localStorage.setItem('visitDate', theDateToday);
