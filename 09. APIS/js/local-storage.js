if (Modernizr.localstorage) {
    var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');
  var txtLocation = document.getElementById('location');
  var save = document.getElementById('save');

  txtUsername.value = localStorage.getItem('username');  // Elements populated
  txtAnswer.value = localStorage.getItem('answer');
  txtLocation.value = localStorage.getItem('location');     // by localStorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    
    localStorage.setItem('answer', txtAnswer.value);
  }, false);

  txtLocation.addEventListener('input', function () {
      localStorage.setItem('location', txtLocation.value);
  })

  save.addEventListener('input click', function (e) {
      e.preventDefault();
  })
}