// Creat the array and assign it values
var colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'beige';

// Get the element with an id of colors
var el = document.getElementById('colors');
// Replace element with the third item from the array
el.textContent = colors[2];

// Note: textContent does not work in IE8 or earlier - see explanation on website