

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
    let m = document.getElementById('menu');
    if (e.target.id != 'test' && e.target.id != 'menu') {
        m.style.display = 'none';
    } else if (e.target.id == 'test') {
        m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    }
});
