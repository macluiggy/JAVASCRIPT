$(function () {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a>Show</a>');

    $h2.on('click', function () {
        $h2.next()
        .fadeIn(500)
        .children('.hot')
        .addClass('complete');
        $h2.find('a').fadeOut();
        $('ul').find('button').remove();
        $('ul').append('<button class="hide">hide </button>')
    });

    var $ul = $('ul');
    $ul.on('click', function () {
        $ul.children()
        .fadeOut(500);

        $h2.find('a').remove()
        $h2.append('<a>Show</a>');
    })
});