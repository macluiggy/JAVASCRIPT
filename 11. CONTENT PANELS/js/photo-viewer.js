var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {
    
    if ($current) {
        $current.stop().fadeOut('slow');
    }

    $img.css({
        marginLeft: -$img.width() / 2,
        marginTop: -$img.height() / 2
    });

    $img.stop().fadeTo('slow', 1);

    $current = $img;
}

$(document).on('click', '.thumb', function (e) {
    var $img;
    var src = this.href;
    request = src;

    e.preventDefault();

    $thumbs.removeClass('active');
    $(this).addClass('active');

    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) { // And if isLoading is false
            crossfade(cache[src].$img);         // Call crossfade() function
          }
        } else {                                // Otherwise it is not in cache
          $img = $('<img/>');                   // Store empty <img/> element in $img
          cache[src] = {                        // Store this image in cache
            $img: $img,                         // Add the path to the image
            isLoading: true                     // Set isLoading property to false
          };

        $img.on('load', function () {
            $img.hide();

            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;

            if (request === src) {
                crossfade($img);
            }
        });

        $frame.addClass('is-loading');

        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    }
});

$('.thumb').eq(0).click();