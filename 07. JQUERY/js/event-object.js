$(function () {

    $('li').on('click', function (e) {
        $('li span').remove();
        var ids = this.id;
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + e.type +  ': ' + ids +'</span>');
    });

});