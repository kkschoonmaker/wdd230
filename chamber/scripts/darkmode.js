const modeButton = document.querySelector('#mode');
const main = document.querySelector('body');
const changeText = document.querySelector('.plain-text');

modeButton.addEventListener('click', () => {
  if (modeButton.textContent.includes('Light Mode')) {
    main.style.background = '#f2f2f2';
    main.style.color = '#023373';
    changeText.style.color = '#023373';
    modeButton.textContent = 'Dark Mode';
  } else {
    main.style.background = '#023373';
    main.style.color = '#023373';
    changeText.style.color = '#f2f2f2';
    modeButton.textContent = 'Light Mode';
  }
});
