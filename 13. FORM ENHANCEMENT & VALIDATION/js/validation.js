(function () {
    document.forms.register.noValidate = true;
    $('form').on('submit', function (e) {
        var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;


        for (let i = 0, l = elements.length - 1; i < l; i++) {
            
            isValid = validateRequired(elements[i]) && validateType(elements[i]); // Verifica entre si
            // el elemento actual es requrido y si tambien el typo de elemento es valido, si ambas funciones
            // debuelven true isValid tambien es true
            if (!isValid) {//si el elemento no es requerido ni su typo es valido
                showErrorMessage(elements[i]); // muestra el error con el determinado elemento
            } else {// si lo es
                removeErrorMessage(elements[i]) // elimina el mensage del error
            }
            valid[elements[i].id] = isValid;
        }

        if (!validateBio()) { // se llama a la funcion validateBio(), si no es valido, entonces
            showErrorMessage(document.getElementById('bio')); // se muestra el error y
            valid.bio = false; // la propiedad correspondiente se define como false
        } else {
            removeErrorMessage(document.getElementById('bio')); // si es valido, se borra el mensaje de error
        }

        // validateParents y validatePassword van aqui

        for (var field in valid) { // loopea en cada elemento del objeto valid
            if (!valid[field]) { //si cualquiera de los elementos tiene un valor de falso
                isFormValid = false; // isFormValid se hace falso, por tanto todo el formulario
                break;               // se hace falso, lo que no deja enviar el formulario
            }
            isFormValid = true; // si todos los elementos son verdaderos, isFormValid se hace verdaderp
        }

        if (!isFormValid) { // si isFormValid es falso
            e.preventDefault; // previene que la pagina envie el formulario
        }
    });
}());