/*Create list*/
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  /*original code to display favorite chapters*/
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = /*input.value*/ item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
  });
  input.value = '';
}

/*local storage*/

function setChapterList() {
  localStorage.setItem(myFavBOMList, JSON.stringify(chaptersArray));
}
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  s;
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
