jQuery(document).ready(function($) {

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var slider = new IdealImageSlider.Slider({
        selector: '#homeSlider',
        height: 400, // Required but can be set by CSS
        interval: 2000,
    });
    slider.addCaptions();
    slider.start();

});

