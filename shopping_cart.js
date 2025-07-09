// build a shopping cart that shows 4 prompt (add, remove, display and quit)
// when we type add -> it should prompt us to enter an item to add to our cart
// when we type remove -> it should prompt us to enter an item to remove from our cart and it will be removed from the cart
// when we type display -> it should display all the items on our cart
// when we type quit -> it should quit or close the program

// NB: cart is an empty Array

// create a cart (an empty array)
let cart = [];

// create add item function
function addItem() {
  let item = prompt("enter an item:");
  cart.push(item);
}

// remove item function
function removeItem() {
  let name = prompt("enter a name to remove:");
  // item.splice(startIndex, lenght)
  cart.splice(cart.indexOf(name), 1);
}

// display item function

function displayItems() {
  alert(cart);
}

alert("Hello, welcome to Rotimi stores");
let question = prompt("would you like to shop? (y/n): ");

let reply;

if (question === "y") {
  // do something
  while (reply !== "quit") {
    reply = prompt("would you like to add, remove, display and quit?");
    if (reply === "add") {
      addItem();
    } else if (reply === "remove") {
      removeItem();
    } else if (reply === "display") {
      displayItems();
    } else if (reply === "quit") {
      alert("thanks for visiting my shop");
    } else {
      alert("invalid input");
    }
  }
} else {
  alert("thanks for visiting my shop");
}
