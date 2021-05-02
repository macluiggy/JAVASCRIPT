var xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status === 200) {
        var response = xhr.responseText;
        let responseObject = JSON.parse(response);
        let newContent = '';
        let eventsArr = responseObject.events;
        
        eventsArr.forEach( (el, i) => {
            // statements
            newContent+= `<div class="event">
            <img src="${eventsArr[i].map}" alt="${el.location}">
            <p><b>${el.location}</b><br>
            ${el.date}</p></div> `
        });

        document.getElementById('content').innerHTML = newContent;
    }

}

xhr.open('GET', 'data/data.json', true);
xhr.send(null);