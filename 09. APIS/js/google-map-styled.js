function init() {
    var pinLocation = new google.maps.LatLng(40.782710,-73.967310);
    var mapOptions = {
        center: pinLocation,
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
        streetViewControl: false,
        overviewMapControl: false,
        styles: [
            {
                stylers: [
                    { hue: "#00ff6f"},
                    { saturation: -50}
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 100},
                    { visibility: "simplified"}
                ]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    { hue: "#ff6600"},
                    { saturation: +80}
                ]
            }, {
                featureType: "transit",
                elementType: "labels",
                stylers: [
                    { hue: "#ff0066"},
                    { saturation: +80}
                ]
            }
        ]
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    var startPosition = new google.maps.Marker({
        position: pinLocation,
        map: venueMap,
        icon: "img/go.png"
    });
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;
