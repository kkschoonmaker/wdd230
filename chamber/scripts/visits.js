// // Initialize display element variable
// const visitsDisplay = document.querySelector('.visits');

// // Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

// //  Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numVisits !== 0) {
//   visitsDisplay.textContent = numVisits;
// } else {
//   visitsDisplay.textContent = `Welcome! Let us us know if you have any questions.`;
// }

// //  increment the number of visits by one.
// numVisits++;

// // store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem('numVisits-ls', numVisits);

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
