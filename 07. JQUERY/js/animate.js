$(function () {
    $('li').on('click', function () {
        $(this).animate({
            opacity: 0.0,
            padingLeft: '+=80'
        }, 500);
    });
});