// Create variables and assign their values
var inStock;
inStock = true;
shipping = false;

// get the element that has an id of inStock
var elStock = doucment.getElementById('stock');
// Set class name with value of inStock variables 
elStock.className = inStock;

// get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;
