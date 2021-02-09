yepnope ({
    test: Modernizr.inputtypes.number,
    nope: ['js/numPollyfill.js', 'css/number.css'],
    complete: function () {
        console.log('YepNope + Modernizr are done');
    }
})