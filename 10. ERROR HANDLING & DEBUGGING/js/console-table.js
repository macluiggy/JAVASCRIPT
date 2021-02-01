var contacts = {
    'London': {
        'tel': '+44 (0)...',
        'country': 'UK'
    },
    'sidney': {
        'tel': '+61 (0)...',
        'country': 'australia'
    },
    'new york': {
        'tel': '+1 (0)...',
        'country': 'usa'
    }
}

console.table(contacts);

var city, contactsDetails;
contactsDetails = '';

$.each(contacts, function (cit, contact) {
    contactsDetails += cit + ': ' + contact.tel + '<br>';
});
$('h2').after('<p>' + contactsDetails + '</p>')

var countries = {
    'ecuador': {
        'provinces': '24',
        'poblation': 15000000
    },
    'nameku': {
        'provinces': 1234576,
        'poblation': 99990
    }
}

console.table(countries);

