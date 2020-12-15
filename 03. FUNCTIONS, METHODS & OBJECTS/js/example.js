/*El script se encuenta ubicado dentro de una expresion de funcion invocada inmediata
la cual ayuda a protejer el alcance de las variables */
(function() {
    // PARTE UNO: CREA UN OBJETO DE UN HOTEL Y ESCRIBE LOS DETALLES DE LAS OFERTAS

    //Crea un objeto hotel usando la sintaxis de objeto literal
    var hotel = {
        name: 'park',
        roomRate: 240,  // Cantidad en dolares
        discount: 15,   // Porcentaje en descuento
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Escribe el nombre del hotel, tarifa estandar, y la tarifa especial
    var hotelName, roomRate, specialRate;                              // Declara las variables

    hotelName = document.getElementById('hotelName');                 // Get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;                     // Escribe el nombre del hotel
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // Escribe la tarifa de la habitacion
    specialRate.textContent = '$' + hotel.offerPrice();     // Escribe el prcio de oferta

    // PARTE DOS: CALCULA Y ESCRIBE LOS DETALLES DE EXPIRACION DE LA OFERTA
    var expiryMsg;  // Mensaje mostrado al usuario
    var today;      // La fecha de hoy
    var elEnds;     // El elemento que muestra el mensaje acerca de la expiracion de la oferta

    function offerExpires(today) {
        // Declara vairables dentro de la funcion para el alcance local
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Añade el tiempo en 7 dias (añadido en milisegundos)
        weekFromToday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));

        // Crea arrays para guardar los nombres de los dias / meses
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
         'Friday', 'Saturday'];
         monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December'];

         // Colecciona las partes de la fecha para mostrar en la pagina
         day = dayNames[weekFromToday.getDay()];
         date = weekFromToday.getDate();
         month = monthNames[weekFromToday.getMonth()];
         year = weekFromToday.getFullYear();

         // Create the message
         expiryMsg = 'Offer expires next ' + day;
         expiryMsg += '<br />  (' + date +' ' + month + ' ' + year + ')';
         return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}());