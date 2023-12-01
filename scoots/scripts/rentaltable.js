const baseURL = 'https://kkschoonmaker.github.io/wdd230/scoots';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/scoots/data/rentals.json';
const rentalTable = document.querySelector('#rentalTable');


async function getRentals() {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.log(data);
  displayRentals(data.rentals);
}

const displayRentals = (rentals) => {
  rentals.forEach((rental) => {
    const tableBody = document.querySelector('#rentalTable tbody');

    const row = document.createElement('tr');
    row.innerHTML = `<td>${rental.RentalType}</td><td>${rental.MaxPersons}</td><td>${rental.ReservationPrice[0].FullDay}</td>td>${rental.ReservationPrice[0].HalfDay}</td>td>${rental.WalkinPrice[0].FullDay}</td>td>${rental.WalkinPricePrice[0].HalfDay}</td>`;
    tableBody.appendChild(row);
  });
};

getRentals();