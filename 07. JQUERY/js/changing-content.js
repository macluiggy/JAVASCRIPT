$(function() {
    $('li:contains("ne nu")').text('almonds');
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
})