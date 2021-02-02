var width = 12, height = 2;
var area = document.getElementById('area');

function calculateArea(width, height) {
    try {
        var area = width * height;
        if (!isNaN(area)) {
            return area;
        } else {
            throw new Error('calculateArea() received invalid number');
        }
    } catch (e) {
        console.log(e.name + ' ' + e.message);
        return 'We were unabled to calculate the area';
    }
}

area.innerHTML = calculateArea(width, height);