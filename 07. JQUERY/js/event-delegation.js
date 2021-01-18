$(function () {
    var listItem, itemStatus, eventType, ids;

    $('ul').on(
     'click mouseover',
     ':not(#four)',
     {status: 'important'},
     function (e) {
        listItem = 'Item: ' + e.target.textContent + '<br>';
        itemStatus = 'Status: ' + e.data.status + '<br>';
        eventType = 'Event: ' + e.type + '<br>';
        ids = 'Id: ' + this.id;
        $('#notes').html( listItem + itemStatus + eventType + ids);
    });
    
});