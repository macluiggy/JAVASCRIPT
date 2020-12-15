var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = pass1;

var passBoth = score1 >= pass1 || score2 >= pass2;

var el = document.getElementById('answer');
el.textContent = 'Resit required: ' + !passBoth;