$(function () {
    var backgroundColor = $('li').css('background-color');
    $('ul').prepend('<p> Color was: ' + backgroundColor +'</p>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75',
    });
});

var elReturnHot = document.getElementById('return');
function returnHot() {
    $('li.hot').addClass('favorite');
}

elReturnHot.addEventListener('click', returnHot, false);

