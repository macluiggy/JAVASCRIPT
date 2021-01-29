console.info('And we\'re off...');
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('click', function () {
    console.warn('You entered', this.value);
});

$('#calculator').on('submit', function (e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    console.log('Width: ' + width);
    
    height = $('#height').val();
    console.log('Height: ' + height)

    area = width * height;
    console.error(area);

    $form.append('<p class="result">' + area + '</p>');
});

$('#logo').on('click', function () {
    $('#width').val('');
    $('#height').val('');
    $('p').hide();
    $('#areaResults').append('<li>' + area + '</li>');
    $('#content').hide().fadeIn('slow');
})