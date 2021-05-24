// Create variables to hold the name and note text.
var username;
var message;

// Assign values to these variables.
username = 'Molly';
message = 'See our upcoming range';

// Get the element with an id of name.
var elName = document.getElementById('name');
// Replace the content of this element.
elName.textContent = username;

// Get the element with an ID of note.
var elNote = document.getElementById('note');
elNote.textContent = message;

// Note: textContent does not work in IE8 or earlier - see explanation on website