let navToggle = document.getElementById(`hamburger`);
let bars = document.querySelectorAll(`.bar`);
let navItems = document.getElementsByClassName(`nav-items`);
let colorLogo = document.querySelectorAll(`.logo`);
function toggleX(){bars.forEach(i=>i.classList.toggle(`x`))}
let nav = document.getElementsByTagName(`nav`);

navToggle.addEventListener(`click`,toggleX);
navToggle.addEventListener(`click`, function(){nav.style.backgroundColor = "#FFEBE4";})
navToggle.addEventListener(`click`,function(){colorLogo.forEach(i=>i.classList.toggle(`bw`));})

