if (Modernizr.sessionstorage) {
    
    var txtUsername = document.getElementById('username');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username');
    txtAnswer.value = sessionStorage.getItem('answer');

    txtUsername.addEventListener('input', function () {
        if (txtUsername.value.length <= 10) {
            sessionStorage.setItem('username', txtUsername.value);
        } else {
            alert('Username must be 5 characters or less!')
        }
    }, false);

    txtAnswer.addEventListener('input', function name(params) {
        if (txtAnswer.value.length < 100) {
            sessionStorage.setItem('answer', txtAnswer.value);
        } else {
            alert('Text must be 100 characters or less!');
        }
    }, false);
}s