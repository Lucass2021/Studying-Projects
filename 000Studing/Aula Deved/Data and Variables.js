//Old way-----------------


var life = 100;  // Life displayed in a game

life = life - 10; // Life displayed after a hit
//life = 90
life = life - 10; // Life displayed after a hit
//life = 80

var name = "Dev Ed"; // Name displayed in a game

console.log(life)


var checkout = true; // If you have a product in a cart you can order (TRUE)
// If you cart is empty you order option is unavailable (FALSE)

// New way-------------------
const life1 = 100;

// life1 = 50; Error message, const can't be changed

let life2 = 100;

life2 = 50; // It works but only in local scope, unlike var

console.log(life2)

