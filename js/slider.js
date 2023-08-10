$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false, 

        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1500,
        slidesToShow: 1,
        infinite: true,
        swipe: true,
        fade: true,

        // responsive: [
        //     {
        //         breakpoint: 998,
        //         settings: {
        //             dots: false,
        //             arrows: true
        //         }
        //     },
        //     {breakpoint: 768,
        //         settings: {
        //             dots: false,
        //             arrows: false,
        //             autoplaySpeed: 3000,
        //             speed: 800,
        //         }  
        //     },
        // ]
    });
});

$(document).ready(function(){
    $('.slider2').slick({
        dots: true,
        arrows: true, 
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1500,
        slidesToShow: 3,
        infinite: true,
        swipe: true,
        fade: true,
    });
});