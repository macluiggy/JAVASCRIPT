var xhr = XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
    }
};

xhr.open('GET', 'http://www.javascriptbook.com/code/c08/data/data.xml', true);
xhr.send(null);

