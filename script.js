const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__menu-list');
const logo = document.querySelector('.header__logo');

menuButton.addEventListener('click', function() {
  if(!menuButton.classList.contains('header__menu-button_close')) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  menuButton.classList.add('header__menu-button_close');
  logo.classList.add('header__logo_hidden');
  menu.classList.add('header__menu-list_open');
}

function closeMenu() {
  menuButton.classList.remove('header__menu-button_close');
  logo.classList.remove('header__logo_hidden');
  menu.classList.remove('header__menu-list_open');
}
