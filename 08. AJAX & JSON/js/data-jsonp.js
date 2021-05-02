/*let elScript = document.createElement('script');
elScript.innerHTML = `
showEvents({
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "img/map-ny.png"
    },
    {
      "location": "Portiviejo, Ecuador",
      "date": "enero 23",
      "map": "img/map-ny.jpg"
    }
  ]
});
`
document.getElementsByTagName('body')[0].appendChild(elScript);*/

let elScript = document.createElement('script');
elScript.setAttribute('src', './data/data-jsonp.js');
document.getElementsByTagName('body')[0].appendChild(elScript);

function showEvents(jsonObject) {
    var newContent = '';

    jsonObject.events.forEach(el => {
        // statements
        newContent += `<div class="event">
            <img src="${el.map}" alt="${el.location}">
            <p><b>${el.location}</b><br>
            ${el.date}</p></div> `
    });

    document.getElementById('content').innerHTML = newContent;
}

/*showEvents({
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "img/map-ny.png"
    },
    {
      "location": "Portiviejo, Ecuador",
      "date": "enero 23",
      "map": "img/map-ny.jpg"
    }
  ]
})*/