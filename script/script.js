'use strict'

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

});

var swiper = new Swiper(".mySwiperSecond", {
    pagination: {
        el: ".swiper-pag",
    },
    mousewheel: true,

});


document.addEventListener("click", function (e) {
    let m = document.getElementById('icon_one');
    if (e.target.id != 'circle_one' && e.target.id != 'icon_one' && e.target.id != 'circle_one_bg' ) {
        m.style.opacity = '0';
    } else if (e.target.id == 'circle_one' || e.target.id == 'circle_one_bg') {
        m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
});

document.addEventListener("click", function (e) {
    let m = document.getElementById('icon_two');
    if (e.target.id != 'circle_two' && e.target.id != 'icon_two' && e.target.id != 'circle_two_bg' ) {
        m.style.opacity = '0';
    } else if (e.target.id == 'circle_two' || e.target.id == 'circle_two_bg') {
        m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
});

document.addEventListener("click", function (e) {
    let m = document.getElementById('icon_three');
    if (e.target.id != 'circle_three' && e.target.id != 'icon_three' && e.target.id != 'circle_three_bg' ) {
        m.style.opacity = '0';
    } else if (e.target.id == 'circle_three' || e.target.id == 'circle_three_bg') {
        m.style.opacity = (m.style.opacity != '1') ? '1' : '0';
    }
});


