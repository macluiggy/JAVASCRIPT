$(function () {
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(500);
    $('#two').width('75%');
    $('h2').height('300%');

    $('form').on('submit', function (e) {
        e.preventDefalut();
        var $value = $('#value').val();
        if ($value == 1) {
            $('h2').height('150%');
        } else if ($value == 2) {
            $('h2').outerHeight('150%');
        } else {
            alert('There are just two options');
        }
    });
});

