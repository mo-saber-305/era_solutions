/*start animation*/
new WOW().init();
/*end animation*/

/*start info slider*/
let myCarousel = document.getElementById('infoSlider');
myCarousel.addEventListener('slid.bs.carousel', function () {
    clacCarouselContentHeight();
});

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 10000,
});

function clacCarouselContentHeight() {
    let childCarouselContentHeight = $('.info-slider .carousel .carousel-inner .carousel-item.active .carousel-caption .content').innerHeight();
    let parentCarouselContentHeight = $('.info-slider .carousel .carousel-inner .carousel-item.active .carousel-caption').height();
    let parentCarouselContentInnerHeight = $('.info-slider .carousel .carousel-inner .carousel-item.active .carousel-caption').innerHeight();
    let padding = parentCarouselContentInnerHeight - parentCarouselContentHeight;
    let finalHeight = childCarouselContentHeight + padding;
    $('.info-slider .carousel .carousel-inner .carousel-item.active .carousel-caption').css({height: finalHeight + 'px'});
}

clacCarouselContentHeight();
/*end info slider*/

/***********************************************************************************************************************************/

/*start our team*/
$('.our-team .our-team-carousel').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
/*end our team*/

/***********************************************************************************************************************************/

/*start partners*/
$('.partners .partners-carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
/*end partners*/

/***********************************************************************************************************************************/

/*start contact us*/

function initMap() {
    // The location of Uluru
    const uluru = {lat: 31.22347415215485, lng: 29.94379325895751};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;
/*end contact us*/

/***********************************************************************************************************************************/
