$(function () {
    $('.team__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
    });

    $('.menu__btn').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active')
    });
});




function init() {
    let map = new ymaps.Map('map', {
        center: [48.211461967979524, 16.328896570780067],
        zoom: 16,


    });
}
ymaps.ready(init);

document.querySelector('.text__map').addEventListener('click', e => e.target.style.display = 'none')



