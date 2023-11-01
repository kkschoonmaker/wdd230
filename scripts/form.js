// Password Confirmation
const pword1 = document.querySelector('#password');
const pword2 = document.querySelector('#password-conf');
const message = document.querySelector('#formmessage');

pword2.addEventListener('focusout', checkSame);

function checkSame() {
  if (pword1.value !== pword2.value) {
    message.textContent = '❗Passwords DO NOT MATCH❗';
    message.style.visibility = 'show';
    pword2.style.backgroundfColor = '##fff0f3';
    pword1.value = '';
    pword2.value = '';
    pword1.focus();
  } else {
    message.style.display = 'none';
    pword2.style.backgroundColor = '#fff';
    pword2.style.color = '#000';
  }
}

// Page Rating
let rangevalue = document.querySelector('#rangevalue');
let range = document.querySelector('#range');

range.addEventListener('change', displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
