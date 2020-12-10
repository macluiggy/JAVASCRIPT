var greeting = 'Howdy ';
var name = 'Luiggy';
var welMessage = `${greeting + name} please check your order:`;

var elWelcome = document.getElementById('greeting')
elWelcome.textContent = welMessage;

var sign = 'Sosote House';
var tiles = sign.length;
var subtotal = 5 * tiles;
var shipping = 7;
var total = tiles + subtotal;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = '$ ' + tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$ ' + subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = '$ ' + shipping;

var elTotal = document.getElementById('grandTotal');
elTotal.textContent = '$ ' + total;
