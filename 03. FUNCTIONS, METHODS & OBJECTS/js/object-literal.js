var hotel = {
    name: 'pasion chocolate',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        availableRoom = this.rooms - this.booked;
        return availableRoom;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();