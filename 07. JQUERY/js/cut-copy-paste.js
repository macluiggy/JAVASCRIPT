$('#uno').on('click', function () {
    $(function () {
        var $p = $('p');
        var $cloneQuote = $p.clone();
        $p.remove();
        $cloneQuote.insertAfter('h2');
    
        var $moveItem = $('#two').detach();
        $moveItem.appendTo('ul');
    }); 
 })

$('#dos').on('click', function () {
    $(function () {
        var $p = $('p');
        var $cloneQuote = $p.clone();
        $p.remove();
        $('h2').after($cloneQuote);
        
        //$('body').unwrap()
        var $moveItem = $('#one').detach();
        $('ul').append($moveItem);
    });
})
