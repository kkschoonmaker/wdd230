const d = new Date();
let year = d.getFullYear();
document.getElementById(
  "year"
).innerHTML = `&copy ${year} Kelly Schoonmaker Colorado, USA`;

let text = document.lastModified;
document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${text}`;

//alert(document.lastModified);
