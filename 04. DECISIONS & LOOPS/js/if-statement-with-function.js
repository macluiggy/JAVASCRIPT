var score = 75;
var msg = '';

function congratulate() {
    msg += 'Gongratulations!';
}

if (score >= 50) {
    congratulate()
    msg += ' Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;