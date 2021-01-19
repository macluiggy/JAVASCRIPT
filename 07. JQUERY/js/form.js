$(function () {
    
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');
    var $temp = $('.temp');

    $newItemButton.show();
    $newItemForm.hide();
    $temp.hide()

    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var newText = $('input:text').val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemButton.show();
        $newItemForm.hide();
        $temp.hide();
        $textInput.val('');

        if ($.isNumeric(newText)) {
            $('li:last').addClass('favorite');
        }
    });

    $('#itemDescription').on('blur', function () {
        $temp.show()
    })

})