var xhr = new XMLHttpRequest();
var button = document.getElementById('button');
console.log(button.innerHTML)
xhr.onload = () => {

    button.addEventListener('click', () => {
        if (xhr.status == 200) {
            // statement
            document.getElementById('container').innerHTML = xhr.responseText;
            console.log(xhr.responseText);
        }
    })
}

xhr.open('GET', './data/picachu.html', true);
xhr.send();