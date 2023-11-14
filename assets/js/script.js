/* adiconar evento */

const addEventOnElem = function (elem, type, callback){
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++){
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/* menu */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/*botão voltar ao top/ menu aparecendo quando descer o scroll */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

/* slide */

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//botao direita

nextBtn.addEventListener("click", () => {
slides.forEach((slide) => {
slide.classList.remove("active");
});
slideIcons.forEach((slideIcon) => {
slideIcon.classList.remove("active");
});
slideNumber++;
if(slideNumber > (numberOfSlides - 1)){
slideNumber = 0;
}
slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");
});
//botao esquerda
prevBtn.addEventListener("click", () => {
slides.forEach((slide) => {
slide.classList.remove("active");
});
slideIcons.forEach((slideIcon) => {
slideIcon.classList.remove("active");
});
slideNumber--;
if(slideNumber < 0){
slideNumber = numberOfSlides - 1;
}
slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");
}); 

//autoplay slide

var playSlider;
var repeater = () => {
playSlider = setInterval(function(){
slides.forEach((slide) => {
slide.classList.remove("active");
});
slideIcons.forEach((slideIcon) => {
slideIcon.classList.remove("active");
});
slideNumber++;
if(slideNumber > (numberOfSlides - 1)){
slideNumber = 0;
}
slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");
}, 4000);
}
repeater();
//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
clearInterval(playSlider);
});
//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
repeater();
});