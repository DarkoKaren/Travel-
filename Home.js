//Selectors
let hader = document.querySelector('.header');
let hamburgerManu = document.querySelector('.hamburger-menu');

hamburgerManu.addEventListener('click',function(){
  hader.classList.toggle('menu-open');
})