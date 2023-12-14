const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');

function toggleMenu() {
    menuBtn.classList.toggle('header__menu-btn--close');
    menu.classList.toggle('menu--open');
}

menuBtn.addEventListener('click', toggleMenu);