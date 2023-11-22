const baseURL = 'https://kkschoonmaker.github.io/wdd230/chamber';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/chamber/data/members.json';
const spotlight = document.querySelector('.spotlight');

async function getSpotlight() {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.log(data);
  //   displaySpotlight(data.members);
}

const displaySpotlight = (members) => {
  members.forEach((member) => {
    let card = document.querySelector('#bus1');
    let busName = document.querySelector('.spotlightName');
    let busAddress = document.querySelector('.spolightAddress');
    let busPhone = document.querySelector('.spotlightPhone');

    busName.textContent = `${member.name}`;
    busAddress.textContent = `${member.address}`;
    busPhone.textContent = `${member.phone}`;

    card.appendChild(busName);
    card.appendChild(busAddress);
    card.appendChild(busPhone);
    spotlight.appendChild(card);
  });
};

getSpotlight();
