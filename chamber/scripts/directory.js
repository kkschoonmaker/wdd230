const baseURL = 'https://kkschoonmaker.github.io/wdd230/chamber';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/chamber/data/members.json';
const membersList = document.querySelector('#members-display');

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  //   console.log(data);
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let companyName = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');

    companyName.textContent = `${member.name}`;
    logo.setAttribute('src', member.img);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', '440');
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    url.href = `${member.url}`;
    url.textContent = `Website`;
    url.setAttribute('target', 'blank');

    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    membersList.appendChild(card);
  });
};

getMembers();