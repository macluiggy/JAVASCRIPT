(function () {
    var form = document.getElementById('interests');
    var elements = form.elements;
    var options = elements.genre;
    var all = document.getElementById('all');

    function updateAll() {
        for (let i = 0; i < options.length; i++) {
            options[i].checked = all.checked;
            console.log(options[i].name);
        }
    }
    addEvent(all, 'change', updateAll);

    function clearAllOption(e) {
        var target = e.target || e.srcElement;           // Get target of event
        if (!target.checked) {                           // If not checked
          all.checked = false;                           // Uncheck 'All' checkbox
        }
      }
    for (let i = 0; i < options.length; i++) {
        addEvent(options[i], 'change', clearAllOption)
    }
}());