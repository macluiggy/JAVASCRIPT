// JavaScript validation of subscription form.
// A. Anonymous function triggered by submit event 
// B. Functions called to perform generic checks by anon function in section A
// C. Functions called to perform generic checks by anon function in section A
// D. Functions to get / set / show / remove error messages
// E. Object to check type of data using RegEx called by validateTypes in section B

// Dependencies: jQuery, jQueryUI, birthday.js, styles.css

(function () {
    document.forms.register.noValidate = true;

    // A) Funcion anonima disparada cuando el formulario es enviado
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
            e.preventDefault(); // previene que la pagina envie el formulario
        }
    }); // Final del controlador de eventos

    // ---------------------------------------------------------------------------
    // B) FUNCIONES PARA LOS CONTROLES GENERICOS
    // ---------------------------------------------------------------------------
    // Mira si el campo es requerio y si es asi, verifica que contenga un valor
    // Hacemos esto usando las funciones isRequired() y isEmpty() que se muestran a continuacion,
    // y la funcion setErrorMessage que se muestra mas adelante
    function validateRequired(el) {
        if (isRequired(el)) { // Si el elemento lleva consigo el atributo requerido
            var valid = !isEmpty(el); // verifica que el mismo contenga un valor
            if (!valid) { // si no tiene un valor
                setErrorMessage(el, 'Field is required'); // establece el mensaje de error
            }
            return valid; // devuelve el valor de valid (true/false)
        }
        return true; // Si no lo tiene ,entonce no es requerido, por tanto devuelve true
    }


    // VERIFICA QUE EL ELEMENTO ES REQUIRIDO
    //Esto se logra con la funcion isRequired()
    function isRequired(el) { 
        return ((typeof el.required === 'boolean') && el.required) || // verifica que el navegador sea moderno
        // si es asi comprueba que el atributo "required" este presente
        (typeof el.required === 'string'); // si el navegador no es moderno, verifica que el atributo
        // "required" este presente de la otra forma (si la primera opcion es false), si es asi, 
        //este tiene que ser un string para que devuelva true
    }


    //VERIFICA SI EL ELEMENTO ESTA VACIO (o si su valor es el mismo que el del texto del placeholder)
    // Los navegadores HTML5 dejan a los usuarion ingresar el mismo texto que el del placeholder
    // pero en este caso no es necesario
    // Es llamado por validateRequired()
    function isEmpty(el) {
        //comprueba que el elemento contenga un valor, si es asi entonces no se encuentra vacia
        // y la funcion isEmpty devolvera false
        return !el.value || el.value === el.placeholder;
    }
    // VERIFICA SI EL VALOR ENCAJA CON EL TYPO DE ATRIBUTO
    // Se basa en el objeto validateTypes (mostrado al final de la IIFE)
    function validateTypes(el) {
        if (!el.value) return true; // si el elemento no contiene un valor, retorna true

        var type = $(el).data('type') || el.getAttribute('type'); // primero verifica si la variable type
        // se puede alojar con el metodo .data() de Jquery, si no se guarda el valor del tipo de atributo
        // con el metodo getAttribute() debido a que todos los navegadores pueden devolver el valor del tipo de
        // atributo...
        if (validateType[type] === 'function') { // encaja el elemento type del objeto validateType
            // con el tipo de valor, en este caso una funcion?
            validateTypes[type](el); // si es asi el elemento es pasado al objeto como
            // parametro, este retorna true o false;
        } else {
            return true; // si no encaja, el objeto no es capas de validar e control de forma
            // asi que no se debe establecer un mensaje de error
        }
    }
    // -------------------------------------------------------------------------
    // C) FUNCIONES PARA VALIDACIONES PERSONALIZADAS
    // -------------------------------------------------------------------------
    // SI EL USUSARIO ES MENOR DE 13, VERIFICA QUE LOS PAPAS HAYAN MARCADO LA CASILLA DE CONSENTIMIENTO
    // Dependency: birthday.js (de otra forma verifica que no funciona)


    // Verifica que la biografia sea menor o igual a 140 caracteres
    function validateBio() {
        var bio = document.getElementById('bio'); // guarda la referencia al area de texto de la biografia
        var valid = bio.value.length <= 140; // es bio menor o igual a 140 caracteres?
        if (!valid) { // si no lo es, establece el mensaje de error
            setErrorMessage(bio, 'Your bio should not exceed 140 characters');
        }
        return valid; // devuelve el valor de la variable valid
    }

    // Verifica que ambas contraseñas encajen y tengan 8 caracteres o mas
    function validatePassword() {
        var password = document.getElementById('password'); // guarda la referencia al elemento de contraseña
        var valid = password.value.length >= 8; // es la contraseña mayor o igual a 8?
        if (!valid) { // si no lo es, establece el mensaje de error
            setErrorMessage(password, 'Password must be at least 8 caracters');
        }
        return valid; // devuelve el valor de valid (true/false)
    }
    // -------------------------------------------------------------------------
    // D) FUNCIONES PARA SET / GET / SHOW / REMOVE MENSAJES DE ERROR
    // -------------------------------------------------------------------------
    // el parametro el es el elemento, y message es el mensaje de error
    function setErrorMessage(el, message) { 
        // define el mensaje de error en cada elemento con la funcion .data() de Jquery
        // este toma dos pares de key/value para definir el mensaje en cada elemento del objeto
        // data()
        $(el).data('errorMessage', message);
    }

    function getErrorMessage(el) {
        return $(el).data('errorMessage') || el.title;
    }

    function showErrorMessage(params) {
        var $el = $(el);  // Encuentra el elemento con el error
        var $errorContainer = $el.siblings('.error'); // busca a los hermanos del elemento que
        // contengan como classe 'error'

        if (!$errorContainer.length) { // si error container no contiene errores aun, entonces no tiene
            //longitud, asi que la condicion es true (ya que si no tiene longitud se considera falsy)
            $errorContainer = $('<span class="error"></span>').insertAfter($el); // a la variable
            // error container añadele un tag de span e inserta el mismo despues del elemento correspondiente
        }
        $errorContainer.text(getErrorMessage(el)); // para añadir el texto del error, se llama a la funcion
        // getErrorMessage() con el elemento como argumento, luego se añade el texto con la funcion text()
        // dentro de la variable $errorContainer
    }

    // -------------------------------------------------------------------------
    // E) OBJETO PARA VERIFICAR TYPOS
    // -------------------------------------------------------------------------

    // Verifica si los datos son validos, si no se establece un mensaje de error
    // Retorna true si es valido, false si es invalido
    var validateType = {
        email: function (el) { // crea un metodo de email
            var valid = /[^@]+@[^@]+/.test(el.value); //guarda el resulatado de el test en valid
            // este verifica que el email contenga la expresion regular correspondiente
            if (!valid) { // si no la tiene
                setErrorMessage(el, 'Please enter a valid email') // establece el error
            }
            return valid; // si la expresion regualr encaja, devuelve valid (true)
        },
        number: function (el) { // crea un metodo de number
            var valid = /^\d+$/.test(el.value); //guarda el resulatado de el test en valid
            // este verifica que el number contenga la expresion regular correspondiente
            if (!valid) { // si no la tiene
                setErrorMessage(el, 'Please enter a valid number') // establece el error
            }
            return valid; // si la expresion regualr encaja, devuelve valid (true)
        },
        date: function (el) { // crea un metodo de date
            var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value); //guarda el resulatado de el test en valid
            // este verifica que el date contenga la expresion regular correspondiente
            if (!valid) { // si no la tiene
                setErrorMessage(el, 'Please enter a valid date') // establece el error
            }
            return valid; // si la expresion regualr encaja, devuelve valid (true)
        }
    }
}());