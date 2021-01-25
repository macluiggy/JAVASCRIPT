



$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');
var count = 0;

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // SERVER RETURNS DATA
    var d = new Date();                                  // Create date object
    var hrs = d.getHours();                              // Get hours
    var mins = d.getMinutes();                           // Get mins
    var msg = '<h2>Exchange Rates</h2>';                 // Start message
    $.each(data, function(key, val) {                    // Add each rate
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
    $('#rates').html(msg);                               // Add rates to page
  }).fail( function() {                                  // THERE IS AN ERROR
    $('#rates').html('<p>Sorry, we cannot load rates.</p> <br> <p> Times refrehed: '+ count + '</p>');   // Show error message 
  }).always( function() {                                // ALWAYS RUNS
     var reload = '<a id="refresh" href="#">';           // Add refresh link
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // Add refresh link
     $('#refresh').on('click', function(e) {     // Add click handler
       e.preventDefault();
       count ++;
       
       loadRates();                                      // Call loadRates()
     });
  }); 
}

loadRates();       