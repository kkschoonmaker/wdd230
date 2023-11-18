// Banner Close
let closeButton = document.querySelector('.banner-close');
let banner = document.querySelector('#meeting-banner');

closeButton.addEventListener('click', () => {
  banner.style.display = 'none';
});

// Banner Display Days
let today = new Date();
let weekDay = today.getDay();
console.log(weekDay);

if (weekDay == 1 || weekDay == 1 || weekDay == 3) {
  banner.style.display = 'block';
}
