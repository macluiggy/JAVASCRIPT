var newEl = document.createElement('li');
var newText = document.createTextNode('linoa');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var newH2 = document.getElementById('perro');
newH2.innerHTML = 'Compra Gocerias';

var newEl = document.createElement('p');
var newText = document.createTextNode('50% off');
newEl.appendChild(newText);
var position = document.getElementsByTagName('h2')[0];
position.appendChild(newEl);