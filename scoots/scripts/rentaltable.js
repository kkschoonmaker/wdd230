const baseURL = 'https://kkschoonmaker.github.io/wdd230/scoots';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/scoots/data/rentals.json';
const rentalTable = document.querySelector('#rentalTable');

async function getRentals() {
  const response = await fetch(membersURL);
  const data = await response.json();
  //   console.log(data);
  displayRentals(data.rentals);
}
