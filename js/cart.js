/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
var tBody = document.getElementsByTagName('tbody');

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableChild = tBody.firstElementChild;
  while(tableChild){
    tableChild.remove();
    tableChild = tBody.firstElementChild;
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart = new Cart(cartItems);
  for(var i = 0; i< cartItems.length; i++){
    var tRow = document.createElement('tr');
    tBody.appendChild(tRow);
    var deleteLink = document.createElement('td');
    deleteLink.textContent = 'Delete';
    tRow.appendChild(deleteLink);
    var quantityTd = document.createElement('td');
    quantityTd.textContent = cartItems[i].quantity;
    tRow.appendChild(quantityTd);
    var itemTd = document.createElement('td');
    itemTd.textContent = cartItems[i].product;
    tRow.appendChild(itemTd);
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
