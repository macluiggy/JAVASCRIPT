var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    firstItem.removeAttribute('class');
}

var list = document.getElementsByTagName('ul')[0];
 var newItemLast = document.createElement('li');
 var newTextLast = document.createTextNode('cream');
 newItemLast.appendChild(newTextLast);
 list.appendChild(newItemLast);