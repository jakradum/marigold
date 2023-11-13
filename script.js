let navToggle = document.getElementById(`hamburger`);
let bars = document.querySelectorAll(`.bar`);
let navItems = document.getElementsByClassName(`nav-items`);
let colorLogo = document.querySelectorAll(`.logo`);
function toggleX(){bars.forEach(i=>i.classList.toggle(`x`))}
let navBar = document.querySelectorAll(`.mobile-menu`);
let header = document.querySelectorAll(`.headersec`);

navToggle.addEventListener(`click`,toggleX);
navToggle.addEventListener(`click`,function(){colorLogo.forEach(i=>i.classList.toggle(`bw`));})
navToggle.addEventListener(`click`,function(){navBar.forEach(i=>i.classList.toggle(`drop`));})
navToggle.addEventListener(`click`,function(){header.forEach(i=>i.classList.toggle(`drop`));})