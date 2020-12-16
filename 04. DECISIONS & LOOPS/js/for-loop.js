var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (let i = 0; i < arrayLength; i++) {
    roundNumber = i + 1;

    msg += 'Round ' + roundNumber + ': ';

    msg += scores[i] + '<br>';
    
}

document.getElementById('answer').innerHTML = msg;