(function () {
    

    var length = document.forms.length;
    for (let i = 0; i < length; i++) {
        showPlaceholder(document.forms[i].elements);
    }

    function showPlaceholder(elements) {
        for (let i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (!el.placeholder) {
                continue;
            }
            el.style.color = '#f8584a';
            el.value = el.placeholder;

            addEvent(el, 'focus', function () {
                if (this.value === this.placeholder) {
                    this.value = '';
                    this.style.color = 'blue';
                }
            });

            addEvent(el, 'blur', function () {
                if (this.value === '') {
                    this.value = this.placeholder;
                    this.style.color = '#f8584a';
                }
            });
        }
    }
}())