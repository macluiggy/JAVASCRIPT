var $form, width, height, area;
$form =$('#calculator');

$('form input[type="text"]').on('blur', function () {
    console.assert(this.value > 10, 'User entered less than 10');
});

$('#calculator').on('submit', function (e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    console.assert($.isNumeric(area), 'User entered non-numeric value');
    console.assert(area > 10, 'User entered an area less than 10');

    $form.append('<p>' + area + '</p>');
});

$('#logo').on('click', function () {
    $('#width').val('');
    $('#height').val('');
    $('p').hide();
    $('#areaResults').append('<li>' + area + '</li>');
    $('#content').hide().fadeIn('slow');
});