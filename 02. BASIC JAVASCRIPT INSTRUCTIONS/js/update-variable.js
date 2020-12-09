var inStock, shipping;

inStock = true;
shipping = false;

/*Some other procces could make the variables change,
 so the script migth change too */

 inStock = false;
 shipping = true;

 var tuStock = document.getElementById('stock');
 tuStock.className = inStock;
 var tuShip = document.getElementById('shipping');
tuShip.className = shipping;