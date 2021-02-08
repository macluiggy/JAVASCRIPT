(function () {
    var form = document.getElementById('login');
    var elements = form.elements;
    var elUsername = elements.username;
    var elMain = document.getElementById('main');
    addEvent(form, 'submit', function (e) {
        e.preventDefault();
        
        var msg = 'Welcome ' + elUsername.value;
        elMain.textContent = msg;
    });
}());