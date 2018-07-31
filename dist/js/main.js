const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuList = document.querySelector('.menu-list');
const navItems = document.querySelectorAll('.nav-item'); //note: querySelectorAll();

let showMenuState = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenuState) {
    menuBtn.classList.add('close');
    menuBranding.classList.add('show');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuList.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));

    showMenuState = true;
  } else {
    menuBtn.classList.remove('close');
    menuBranding.classList.remove('show');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuList.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));

    showMenuState = false;
  }
}

$(document).ready(function() {
  $('.menu-btn').on('click', function() {
    animate_menu_items();
  });
});

function animate_menu_items() {
  let navItems = $('.nav-item');

  if ($(window).width() < 768) {
    navItems.each(function(index, item) {
      $(item).removeAttr('style'); //.css({ transition: 'none' });
    });
  }

  if ($(window).width() >= 768) {
    navItems.each(function(index, item) {
      let delay_time = (index + 1) * 0.2 + 's';

      $(item).css({ 'transition-delay': delay_time });
    });
  }
}
