function init() {
    var mapOptions = {
        center: new google.maps.LatLng(40.782710,-73.967310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13,

        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.TOP_RIGHT,
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT,
        },
        scaleControl: true,
        scaleControlOption: {
            position: google.maps.ControlPosition.TOP_CENTER,
        },
        streetViewControl: true,
        overviewMapControl: true
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;
