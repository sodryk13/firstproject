const burgerBtn = document.querySelector('.header__burger');


burgerBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('menu-open');
})