/* $(function() {
  var $listHTML = $('ul').html();
  $('ul').append($listHTML);
}); */

var $listHTML = $('ul').html();
$('ul').append($listHTML);

var $listText = $('ul').text()
$('ul').append('<p>' + $listText + '</p>');

var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '</i>')

var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>')