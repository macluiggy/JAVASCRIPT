$('#register').on('submit', function (e) {
    e.preventDefault();
    var details = $('#register').serialize();
    $.post('register.php', details, function (data) {
        $('#register').html(data);
    });
});