var pass = 50;
var score = 75;
var msg;
if (score >= 50) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;