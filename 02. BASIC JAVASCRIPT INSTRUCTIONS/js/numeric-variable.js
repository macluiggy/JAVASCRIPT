var price
var quanity
var total

price = 5
quanity = 14
total = price * quanity

var el = document.getElementById('cost')
el.textContent = 'cost $' + total + ' per tile'