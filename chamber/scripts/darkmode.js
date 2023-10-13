const modeButton = document.querySelector('#mode');
const main = document.querySelector('body');

modeButton.addEventListener('click', () => {
  if (modeButton.textContent.includes('Light Mode')) {
    main.style.background = '#f2f2f2';
    main.style.color = '#023373';
    modeButton.textContent = 'Dark Mode';
  } else {
    main.style.background = '#023373';
    main.style.color = '#023373';
    modeButton.textContent = 'Light Mode';
  }
});
