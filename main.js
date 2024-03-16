import './scss/style.scss';

const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector(".nav-content");
const navOverlay = document.querySelector(".nav-overlay");
const body = document.querySelector("body");


function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  body.classList.add("noscroll");
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  body.classList.remove("noscroll");
}

function setupNav() {
  if (e.matches) {
    // is mobile
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500); 
  } else {
    // is desktop
  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
media.addEventListener('change', e => {
  setupNav(e);
});