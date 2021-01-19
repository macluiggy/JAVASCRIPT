$(function () {
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('ul').append('<li id="five">Celeste</li>' +
    '<li id="six">Como azul</li>')
    $('li:gt(2)').addClass('cool');

    $('li:gt(2)').on('click', function () {
        $('li:gt(2)').each(function () {
            var $this = $(this);
            $this.addClass('favorite');
        });
    });
});

