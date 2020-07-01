$(function(){

    $('.slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            },
            
        ]
        
    });

    $('.reviews__wrapper').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2, 
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.certified__inner-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        ]
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "20px",
        readOnly: true,
        ratedFill: "#ffcc66"
    });

    $(".rate-star__user").rateYo({
        rating: 4.5,
        starWidth: "20px",
        readOnly: true,
        ratedFill: "#cccccc",
        normalFill: "#e4e4e4"
        
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    new WOW().init();

});