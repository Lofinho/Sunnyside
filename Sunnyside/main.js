// OPEN AND CLOSE MENU

const toggle = document.querySelector('.navbar-icon');
let openMenu = document.querySelector('.menu-navigation');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    openMenu.classList.toggle('active');
};