var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="img/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="img/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="img/t-green.png" id="green" alt="green" /></a></div><div class"third"><a href="#"><img src="img/home2.jpg" id="home2" alt="home2"></a></div></div>';
$('#selector').append(vote);

$('#selector a').on('click', function (e) {
    e.preventDefault();
    var queryString = 'vote=' + $(e.target).attr('id');
    $.get('votes.php', queryString, function (data) {
        $('#selctor').html(data);
    });
});


// var queryString = 'vote=' + $(e.target).attr('id');