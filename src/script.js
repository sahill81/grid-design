const navBtn = document.querySelector(".menu-bar");
const headerEl = document.querySelector(".header");
console.log(headerEl);
navBtn.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
});