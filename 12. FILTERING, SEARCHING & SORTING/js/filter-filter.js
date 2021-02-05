$(function () {
    var people = [
        {
            name: 'Casey',
            rate: 60,
            age: 25
        },
        {
            name:'Camille',
            rate: 80,
            age: 25
        },
        {
            name: 'Gordon',
            rate: 75,
            age: 25
        },
        {
            name: 'Nigel',
            rate: 70,
            age: 25
        },
        {
            name: 'Nigel',
            rate: 70,
            age: 25
        },
        {
            name: 'Nigel',
            rate: 70,
            age: 25
        }
    ];

    

    function priceRange(person) {
        return (person.rate >= 65) && (person.rate <= 90);
    };

    var results = [];
    results = people.filter(priceRange);

    var $tableBody = $('<tbody></tbody>');
    /* for (let i = 0; i < results.length; i++) {
        var person = results[i]; 
        var $row = $('<tr></tr>'); 
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $row.append($('<td></td>').text(person.age));
        $tableBody.append($row);
    } */

    results.forEach(function (result) {
        var $row = $('<tr></tr>'); 
        $row.append($('<td></td>').text(result.name));
        $row.append($('<td></td>').text(result.rate));
        $row.append($('<td></td>').text(result.age));
        $tableBody.append($row);
    });

    $('thead').after($tableBody); 
});