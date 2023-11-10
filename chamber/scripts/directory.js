const baseURL = 'https://kkschoonmaker.github.io/wdd230/chamber';
const membersURL =
  'https://kkschoonmaker.github.io/wdd230/chamber/data/members.json';
const members = document.querySelector('#members-display');

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.log(data);
}
