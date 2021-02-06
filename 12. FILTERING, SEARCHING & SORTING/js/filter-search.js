(function () {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];

    $imgs.each(function (img) {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase();
        cache.forEach(function (img) {
            var index = 0;
            if (query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : ''; // forma alternativa al if que es equivalente
                                                                    // a lo de abajo
/*
            if (index === -1) {
                img.element.style.display = 'none';
            } else {
                img.element.style.display = '';
            }
            */
        });
    }

    if ('oninput' in $search[1-1]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter)
    }
}());