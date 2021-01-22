var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (let o = 0; o < responseObject.events.length; o++) {
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '"';
            newContent += 'alt="' + responseObject.events[i].location +'" />';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }
        
        var container = document.createElement('div');
        container.className('container');
        var location = '<img src="' + responseObject.events[1].map + '">';
        container.appendChild(location);

        document.getElementById('content').innerHTML = newContent;
        document.getElementById('content').appendChild(container);
    }
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);