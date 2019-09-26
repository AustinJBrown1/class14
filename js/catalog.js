/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.

var itemsTag = document.getElementById('items');

function populateForm() {

  //iterate over the Product.allProducts array
  for (var i = 0; i < Product.allProducts.length; i++) {
    var itemsTag = document.getElementById('items');
    //create an option for the select
    var option = document.createElement('option');
    option.setAttribute("value", Product.allProducts[i].name);
    option.textContent = Product.allProducts[i].name;
    console.log('appending child');
    itemsTag.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  //get itemsTag value
  var selectedProduct = itemsTag.value;
  var quantityTag = document.getElementById('quantity');
  // TODO: get the quantity
  var quantity = quantityTag.value;
  // TODO: using those, add one item to the Cart
  var addedItem = Cart.prototype.addItem(selectedProduct, quantity);
  // Cart.prototype.addItem(selectedProduct, quantity);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCounter = document.getElementById('itemCount');
  //parse local storage
  var parsedCart = JSON.parse(localStorage.getItem('cartItems'));
  //get length of cart
  itemCounter.textContent = parsedCart.length;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var cartTable = document.getElementById('cart');

  //for each item in cart, create the row/data:
  for (var i = 0; i < Cart.cartItemsArray; i++) {
    //add a tr
    var itemRow = document.createElement('tr');
    cartTable.appendChild(itemRow);

    //append a td for a button, quantity, and name
    var removeButton = doucment.createElement('td');
    removeButton.textContent = "remove";
    var quantityTd = doucment.createElement('td');
    quantityTd.textContent = cartItemsArray[i].quantity;
    var itemTd = doucment.createElement('td');
    itemTd.textContent = cartItemsArray[i].product;
  }



  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

console.log('calling populateform');
populateForm();