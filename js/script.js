/*start info slider*/
let myCarousel = document.getElementById('infoSlider');
myCarousel.addEventListener('slid.bs.carousel', function () {
    clacCarouselContentHeight();
});

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 200000,
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