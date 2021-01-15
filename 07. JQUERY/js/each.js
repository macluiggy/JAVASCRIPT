

$(function () {
    $('ul').prepend('<li id="zero" class="hot">Arriz</li>')
    $('li').each(function () {
        var ids = this.id;
        $(this).append(' <span class="order">- ' + ids + '</span>');
    });
});