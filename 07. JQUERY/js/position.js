
$(function () {
    var $window = $(window);
    var $slideAd = jQuery('#slideAd');                                       // jQuery = $
    var endZone = jQuery('#footer').offset().top - $window.height() - 500; // jQuery = $

    $window.on('scroll', function () {
        
        if (endZone < $window.scrollTop()) {
            $slideAd.animate({'right' : '0px'}, 250);
        } else {
            $slideAd.stop(true).animate({'right': '-360px'}, 250);
        }
    });
});


