// Banner Close
let closeButton = document.querySelector('.banner-close');
let banner = document.querySelector('#meeting-banner');

closeButton.addEventListener('click', () => {
  banner.style.display = 'none';
});

// Banner Display Days
let today = new Date('November 23, 2023');
let weekDay = today.getDay();
console.log(weekDay);

if (weekDay == 0 || weekDay == 4 || weekDay == 5 || weekDay == 6) {
  banner.style.display = 'none';
}
