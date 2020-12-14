var saying = 'Home sweet home ' + 3.75*10^9;
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>character index</h2><p>' + saying.charAt(12) + '</p>';
msg += '<h2>first wee</h2><p>' + saying.indexOf('wee') + '</p>';
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h2>character index</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;