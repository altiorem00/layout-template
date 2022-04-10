new Swiper('.swiper--gallery', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.nav-arrow__next',
        prevEl: '.nav-arrow__prev',
    },
    pagination: {
        el: '.nav-arrow__progress',
        type: 'progressbar',
    },
});
