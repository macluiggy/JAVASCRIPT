var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');

    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}

