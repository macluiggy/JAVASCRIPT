console.info('And we\'re off...');
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('b', function () {
    console.warn('You entered', this.value);
});

$('#calculator').on('submit', function (e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;
    
    console.group("Area calculation:")
    console.log('Width', width);
    console.log('Height ', height);
    console.log('Area: ' ,area);

    $form.append('<p class="result">' + area + '</p>');
});

$('#logo').on('click', function () {
    $('#width').val('');
    $('#height').val('');
    $('p').hide();
    $('#areaResults').append('<li>' + area + '</li>');
    $('#content').hide().fadeIn('slow');
})