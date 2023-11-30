let alertClose = document.querySelector('.closebtn');
let message = document.querySelector('#weather-alert');

alertClose.addEventListener('click', () => {
  message.stlye.display = 'none';
});

// Live Weather input
