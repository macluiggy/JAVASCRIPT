$(function () {
    $('ul').before('<p class="notice">Just updated </p>');
    $('li.hot').prepend('+ ');
    let $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);
});