var today = new Date();
var year = today.getFullYear();
msg = '<p>Copyright &copy' + year + '</p>';

var el  = document.getElementById('footer');
el.innerHTML = msg;