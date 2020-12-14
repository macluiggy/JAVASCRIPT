var msg = '<p><b>page title: </b>' + document.title + '<br>';
msg += '<b>page address: </b>' + document.URL + '<br>';
msg += '<b>last modifiend: </b>' + document.lastModified + '</p>';
msg = msg
var el = document.getElementById('footer');
el.innerHTML = msg;