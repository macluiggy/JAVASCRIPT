(function () {
  var password = document.getElementById('password');
  var passwordConfirm = document.getElementById('conf-password');
  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement; // obten el elemento correspondiente
    if (target.value.length < 8) { // si la contraseña es menor a 8
      target.className = 'fail'; // cambia el nombre de la clase del elemento a 'fail'
    } else { // si no
      target.className = 'pass'; // cambialo a 'pass'
    }
  }
  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement; // obten el elemento correspondiente
    if (target.className === 'fail') { //si la clase del elemento es 'fail'
      target.className = ''; // cambia el mismo a un string en blanco
    }
  }
  function passwordMatch(e) {
    var target = e.target || e.srcElement; // obten el elemento correspondiente
    // si el elemento actual (la contraseña de confirmacion) es igual a la contraseña
    if (target.value === password.value) {
      target.className = 'pass'; // cambia el nombre de la clase del mismo a 'pass'
    } else { // si no son iguales
      target.className = 'fail'; // cambialo a 'fail'
    }
  }
  addEvent(password, 'focus', removeErrorHighlighter);
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordMatch);
}());

/*(function () {
  var password = document.getElementById('password'); // Store password inputs
  var passwordConfirm = document.getElementById('conf-password');
 
  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;             // Get target element
    if (target.value.length < 8) {                     // If its length is < 8
      target.className = 'fail';                       // Set class to fail
    } else {                                           // Otherwise
      target.className = 'pass';                       // Set class to pass
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;              // Get target element
    if (target.className === 'fail') {                  // If class shows fail
      target.className = '';                            // Clear class
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;               // Get target element
    // If value matches pwd and it is longer than 8 characters
    if ((password.value === target.value) && target.value.length >= 8) { 
      target.className = 'pass';                         // Set class to pass
    } else {                                             // Otherwise
      target.className = 'fail';                         // Set class to fail
    }
  }

  addEvent(password, 'focus', removeErrorHighlighter); 
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordsMatch);
}()); */