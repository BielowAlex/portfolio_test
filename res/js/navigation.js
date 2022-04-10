const burgerBtn = document.querySelector('.burger_btn');
const nav = document.querySelector('.nav');
const menuButtons = document.querySelector('.menu').children;

for (const menuButton of menuButtons) {
    menuButton.onclick = () => {
        burgerBtn.classList.add('_burger_close');
        nav.classList.add('_nav_hide');
    }
}


burgerBtn.onclick = () => {
    if (!burgerBtn.classList.contains('_burger_close')) {
        burgerBtn.classList.add('_burger_close');
        nav.classList.add('_nav_hide');
    } else {
        burgerBtn.classList.remove('_burger_close');
        nav.classList.remove('_nav_hide');
    }
}