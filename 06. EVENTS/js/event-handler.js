function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5 ) {
        elMsg.textContent = 'You just entered ' + this.value.length +
         ' character, you must enter 5 or more characters';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;