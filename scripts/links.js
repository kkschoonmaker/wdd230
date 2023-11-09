const baseURL = 'https://kkschoonmaker.github.io/wdd230/';
const linksURL = 'https://kkschoonmaker.github.io/wdd230/data/links.json';
const activityLinks = document.querySelector('#activity-links');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // console.log(data);
  displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
  lessons.forEach((lesson) => {
    const linkList = document.createElement('ul');
    const listItem = document.createElement('li');
    listItem.textContent = `Week ${lesson.lesson}: `;

    lesson.links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = `${link.url}`;
      anchor.textContent = `${link.title}   |  `;

      anchor.setAttribute('target', 'blank');

      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    activityLinks.appendChild(linkList);
  });
};

getLinks();
