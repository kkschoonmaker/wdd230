const baseURL = 'https://kkschoonmaker.github.io/wdd230/';
const linksURL = 'https://kkschoonmaker.github.io/wdd230/data/links.json';
const activityLinks = document.querySelector('#activity-links');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.table(data);
  // displayLinks(data);
}

// const displayLinks = (weeks) => {
//   weeks
// };

getLinks();
