var hotel = {
    name: 'Venus',
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        availableRoom = this.rooms - this.booked;
        return availableRoom;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();