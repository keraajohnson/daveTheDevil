
const mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

$(document).ready(function () {
    $('.fullMenu').on('click', function () {
        $('.menu').fadeIn("slow");
    });
    $('.exit').on('click', function () {
        $('.menu').fadeOut("slow");
    });
    $('.navLink__mobile').on('click', function () {
        $('.menu').fadeOut("slow");
    }); 
});

   
