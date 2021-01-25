$(function () {
    
    var times;
    $.ajax({
        beforeSend: function (xhr) {
            if(xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    function loadTimetable() {
        $.getJSON('data/example.json')
        .done( function (data) {
            times = data;
        }).fail( function () {
            $('#event').html('Sorry, we could not load the timetable at the moment');
        });
    }

    loadTimetable();
})