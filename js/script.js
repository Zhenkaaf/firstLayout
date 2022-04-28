$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
    });
    const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const page = document.querySelector('.page');
const pageTitle = document.querySelector('.page__title');
iconMenu.addEventListener('click', function(event) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    page.classList.toggle('_active');
    pageTitle.classList.toggle('_active');

});
});


