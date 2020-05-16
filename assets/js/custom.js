

//initiating jQuery for stickup manu
jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
});

// scroll up to top
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
$(document).ready(() => {
    $(window).scroll(() => {
        let topVal = $(window).scrollTop();
        if (topVal > 400) {
            $(".scrollBtn").fadeIn();
        } else {
            $(".scrollBtn").fadeOut();
        }
    });

    $(".scrollBtn").on("click", () => {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
});





$(document).ready(function () {
    // light box gallery
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
    // light box video
    $('.video').magnificPopup({
        type: 'iframe',


        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }


    });
});