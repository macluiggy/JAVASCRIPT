$(function () {
    var ids = '';
    var $listItems = $('li');

    $listItems.on('click mousevoer', function () {
        ids = this.id;
        $listItems.children('span').remove();
        $listItems.removeClass('favorite');
        $(this).append('<span class="priority"> ' + ids + '</span>');
        $(this).addClass('favorite')
    });

    $listItems.on('museout', function() {
        $listItems.children('span').remove();
    });
});