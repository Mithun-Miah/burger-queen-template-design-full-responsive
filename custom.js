// owl carousel init for auto play start
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    stagePadding: 5,
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});

// owl carousel init for auto play finish

// jQuery Code for owl carousel start
// $('#owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         550:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })
// jQuery Code for owl carousel end