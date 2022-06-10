const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav__container");
const nav = document.querySelector(".nav");
console.log(nav)

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navContainer.classList.toggle("active");
nav.classList.toggle("active");
});