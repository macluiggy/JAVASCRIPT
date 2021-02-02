var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit...');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    if (area < 100) {
        debugger;
    } else if (!$.isNumeric(area)) {
        debugger;
    }

    $form.append('<p>' + area + '</p>');
});

