function checkUsername() {
    var user = el.value.length;
    var remainig = 5 - user;
    if (user < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'You are missing ' + remainig + ' characters...';
    } else {
        elMsg.textContent = '';
    }
}
function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');


el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);