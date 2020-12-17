
var hotItems = document.querySelectorAll('li.hot');

for (let i = 0; i < hotItems.length; i++) {
    var el = hotItems[i];
    if (i == 0) {
        el.className = 'yellow';
    } else if (i == 1 ) {
        el.className = 'blue';
    } else  {
        el.className = 'red';
    }
    
}