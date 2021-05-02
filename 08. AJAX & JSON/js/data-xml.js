var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {

        var response = xhr.responseXML;
        var events = response.getElementsByTagName('event');

        for (let i = 0; i < events.length; i++) {
            var container, image, location, city, newline;
            container = document.createElement('div');
            container.className = 'event';

            image = document.createElement('img');
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.setAttribute('alt', getNodeValue(events[i], 'location'));
            container.appendChild(image);

            location = document.createElement('p');
            city = document.createElement('b');

            city.innerHTML = `<b>${getNodeValue(events[i], 'location')} </b>
            <br> ${getNodeValue(events[i], 'date')} `
            location.appendChild(city);
            container.appendChild(location);

            document.getElementById('content').appendChild(container);
        }

        function getNodeValue(obj, tag) {
            // body... 
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
        }
    }
};
xhr.open('GET', 'data/data.xml', true);
xhr.send(null); // Send the request