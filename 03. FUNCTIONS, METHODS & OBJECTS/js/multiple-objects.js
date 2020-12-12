function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        roomsAvailable = this.rooms - this.booked;
        return roomsAvailable;
    };
}

var chocolateHotel = new Hotel('pasion chocolate', 40, 25);
var venusHotel = new Hotel('venus', 120, 77);

var details1 = chocolateHotel.name + ' rooms: ';
details1 +=  chocolateHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = venusHotel.name + ' rooms: ';
details2 += venusHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;