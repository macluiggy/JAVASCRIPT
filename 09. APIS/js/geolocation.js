var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(exito, error);
    elMap.textContent = 'Checking location...'
} else {
    elMap.textContent = msg;
}

var altitud = '';
function exito(posicion) {
    if (posicion.coords.altitude == null) {
        // statement
        altitud = 'No se pudo determinar'
    } else {
        altitud = posicion.coords.altitude;
    }
    msg = `<h3>Longitud:<br>${posicion.coords.longitude} </h3>
    <h3>Latidud:<br>${posicion.coords.latitude}</h3> 
    <h3>Altitud:<br>${altitud}</h3>`
    elMap.innerHTML = msg;
}

function error(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}