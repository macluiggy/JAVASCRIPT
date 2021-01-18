$(function () {

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700);
    });
    $li.on('click', function () {
        $(this).fadeOut(700);
    });

    $('button').on('click', function () {
        $li.each(function (i) {
            $(this).delay(700 * i).fadeOut(700);
        });
    });
});