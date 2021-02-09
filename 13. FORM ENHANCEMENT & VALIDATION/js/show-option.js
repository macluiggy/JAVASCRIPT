(function () {
    var form, options, other, otherText, hide;
    form = document.getElementById('how-heard');
    options = form.elements.heard;
    other = document.getElementById('other');
    otherText = document.getElementById('other-text');
    otherText.className = 'hide';

    for (let i = 0; i < options.length; i++) {
        addEvent(options[i], 'click', radioChanged);
    }

    function radioChanged() {
        hide = other.checked ? '' : 'hide'; //si other.checked es true la variable hide
        // se le asigna un string en blance, si no se le asigna el valor 'hide';
        otherText.className = hide; // dependeindo de la condicion anteriot, otherText toma el valor
        //de hide, esto provoca que la casilla de text input se muestre o se esconda, dependiendo de
        // el valor que se le asigno con la condicion
        if (hide) {  // Si hide tiene un valor que no sea en blanco (en este caso 'hide')
            otherText.value = ''; // entonces otherText se le asigna un string en blanco, esto se provoca
            //cuando el radio button de other no esta marcado, ya que asi la condicion anterior se uelve falso
            // y hide tiene el valor de 'hide', esto hace que el valor de otherText se vuelva una string en blanco
            // ya que la condicion dada se cumple
        }
    }
}())