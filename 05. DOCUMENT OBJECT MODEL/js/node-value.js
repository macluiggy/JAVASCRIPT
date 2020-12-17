var itemTwo = document.getElementById('two');

var elTexT = itemTwo.firstChild.nodeValue;

elTexT = elTexT.replace('pine nuts', 'kale');

itemTwo.firstChild.nodeValue = elTexT;


var itemOne = document.getElementById('one');

var elText = itemOne.firstChild.nextSibling.nodeValue;

elText = elText.replace('figs', 'higos');

itemOne.firstChild.nextSibling.nodeValue = elText;


elText = itemOne.firstChild.firstChild.nodeValue;

elText = elText.replace('fresh', 'fresco');
itemOne.firstChild.firstChild.nodeValue = elText;

var itemFour = document.getElementById('four');
var elText = itemFour.firstChild.nodeValue;
elText = elText.replace('balsamic vinegar', 'shuanfanson');
itemFour.firstChild.nodeValue = elText;

var el = document.querySelector('li#four');
el.className = 'yellow';
