var $listItems = $('li');
$listItems.filter('.hot:last').removeClass('hot');
$('li:not(.hot)').addClass('cool');
$listItems.has('em').addClass('complete');

$listItems.each(function () {
    var $this = $(this);
    if ($this.is('.hot')) {
        $this.prepend('Priority item: ');
    }

    if ($this.is('#four')) {
        $this.append(' (last item)')
    }
});

$('li:contains("honey")').append(' (local)');

var $but = $('button');
$but.on('click', function () {
    $('li:contains("balsamic")').attr('class', 'hot');
    $('button').html('Change to cool');
});