var hotel = new Object();

hotel.name = 'park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    availableRooms = this.rooms - this.booked;
    return availableRooms;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();