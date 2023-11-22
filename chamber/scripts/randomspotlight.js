const baseURL = 'https://kkschoonmaker.github.io/wdd230/chamber';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/chamber/data/members.json';
const busOne = document.querySelector('#bus1');
const busTwo = document.querySelector('#bus2');
const busThree = document.querySelector('#bus3');

let availableSpotComp = [];

async function getSpotlight() {
  const response = await fetch(membersURL);
  const data = await response.json();

  displaySpotlight(data.members);
}

getSpotlight();

const displaySpotlight = (members) => {
  while (availableSpotComp.length < 3) {
    const randomNum = Math.floor(Math.random() * members.length);
    const randomItem = members[randomNum];

    if (randomItem != undefined) {
      if (randomItem.memlevel == 'Gold' || randomItem.memlevel == 'Silver') {
        availableSpotComp.push(randomItem);
        delete members[randomNum];
      }
    }
  }

  let busNameOne = document.createElement('h3');
  let lineOne = document.createElement('hr');
  let busAddressOne = document.createElement('p');
  let busPhoneOne = document.createElement('p');

  busNameOne.textContent = `${availableSpotComp[0].name}`;
  busAddressOne.textContent = `${availableSpotComp[0].address}`;
  busPhoneOne.textContent = `${availableSpotComp[0].phone}`;

  busOne.appendChild(busNameOne);
  busOne.appendChild(lineOne);
  busOne.appendChild(busAddressOne);
  busOne.appendChild(busPhoneOne);

  let busNameTwo = document.createElement('h3');
  let lineTwo = document.createElement('hr');
  let busAddressTwo = document.createElement('p');
  let busPhoneTwo = document.createElement('p');

  busNameTwo.textContent = `${availableSpotComp[1].name}`;
  busAddressTwo.textContent = `${availableSpotComp[1].address}`;
  busPhoneTwo.textContent = `${availableSpotComp[1].phone}`;

  busTwo.appendChild(busNameTwo);
  busTwo.appendChild(lineTwo);
  busTwo.appendChild(busAddressTwo);
  busTwo.appendChild(busPhoneTwo);

  let busNameThree = document.createElement('h3');
  let lineThree = document.createElement('hr');
  let busAddressThree = document.createElement('p');
  let busPhoneThree = document.createElement('p');

  busNameThree.textContent = `${availableSpotComp[2].name}`;
  busAddressThree.textContent = `${availableSpotComp[2].address}`;
  busPhoneThree.textContent = `${availableSpotComp[2].phone}`;

  busThree.appendChild(busNameThree);
  busThree.appendChild(lineThree);
  busThree.appendChild(busAddressThree);
  busThree.appendChild(busPhoneThree);
};


