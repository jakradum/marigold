let navToggle = document.getElementById(`hamburger`);
let bars = document.querySelectorAll(`.bar`);
let navItems = document.getElementsByClassName(`nav-items`);
let colorLogo = document.querySelectorAll(`.logo`);
function toggleX(){bars.forEach(i=>i.classList.toggle(`x`))}
let navBar = document.querySelectorAll(`.mobile-menu`);
let header = document.querySelectorAll(`.headersec`);
let menuItems = document.querySelectorAll(`.mobile-dropdown`);

navToggle.addEventListener(`click`,toggleX);
navToggle.addEventListener(`click`,function(){colorLogo.forEach(i=>i.classList.toggle(`bw`));})
navToggle.addEventListener(`click`,function(){navBar.forEach(i=>i.classList.toggle(`drop`));})
navToggle.addEventListener(`click`,function(){header.forEach(i=>i.classList.toggle(`drop`));})
navToggle.addEventListener(`click`,function(){menuItems.forEach(i=>i.classList.toggle(`show`));})

const nav = document.querySelector(`.headersec`);
function addSticky() {
    const scrollDepth = (window.scrollY/(document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if(scrollDepth>25){nav.classList.add(`sticky`);nav.classList.add(`active`)}else{;nav.classList.remove(`active`);}
}
window.addEventListener(`scroll`,addSticky);

let compareButton = document.getElementById("switch");
let sectionToHide = document.querySelectorAll(".flex.compare");
const hideSec = () => {
    sectionToHide.forEach(i => {
        if (i.classList.contains('hidden')) {
            i.classList.remove('hidden');
            i.classList.add('in');
        } else {
            i.classList.add('hidden');
            i.classList.remove('in');
        }
    });
};

compareButton.addEventListener('click', hideSec);

const screenSize = () => {
    if(window.innerWidth>600){
        sectionToHide.forEach(i=>{
            i.classList.remove(`hidden`)
        });
    }else{
        sectionToHide[0].classList.add(`hidden`);
    }
}
screenSize();
window.addEventListener('resize', screenSize);
// read more expand event below
let readmoreButton = document.querySelector(`.read-more`);
let hiddenTestimonials = document.querySelectorAll(`.extra-testimonial`);

const expand = () => {hiddenTestimonials.forEach(i=>{
    i.classList.toggle(`hidden`);
});
readmoreButton.classList.add(`hidden`);
}
readmoreButton.addEventListener(`click`,expand);

