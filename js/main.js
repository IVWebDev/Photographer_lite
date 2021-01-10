//header burger

let headerBurger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header-nav');
let back = document.querySelector('body');
let headerLinks = document.querySelector('.header-links');

headerBurger.onclick = function () {
   headerBurger.classList.toggle('active');
   headerNav.classList.toggle('active');
   back.classList.toggle('lock');
}
headerLinks.onclick = function () {
   back.classList.toggle('lock');
   headerBurger.classList.toggle('active');
   headerNav.classList.toggle('active');
}
// slider
var swiper = new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
   },
});