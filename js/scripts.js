

let inputToppings = []
let inputSize;
let inputQuantity;
let pizza = new Pizza(inputToppings, inputSize, inputQuantity)

function Pizza (toppings, size, veganCrust, quantity, totalPrice) {
this.toppings = [];
this.size = size;
this.veganCrust = veganCrust;
this.quantity = quantity;
this.totalPrice = totalPrice
}

function DeliveryAddress (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip) {
this.deliveryStreetNumber = deliveryStreetNumber;
this.deliveryStreetName = deliveryStreetName;
this.deliveryCity = deliveryCity;
this.deliveryState = deliveryState;
this.deliveryZip = deliveryZip;
}

Pizza.prototype.addToppings = function() {
  $("input:checkbox[name=toppings]:checked").each(function(){
    pizza.toppings.push($(this).val());
  });
}



Pizza.prototype.calculatePrice = function () {
 if (pizza.size === 1) {
   pizza.totalPrice = 15 * pizza.quantity
 } else if (pizza.size === 2) {
   pizza.totalPrice = 20 * pizza.quantity
 } else {pizza.totalPrice = 25 * pizza.quantity}
}

DeliveryAddress.prototype.fullAddress = function () {
  return "<br>" + this.deliveryStreetNumber + " " + this.deliveryStreetName + "<br>" + this.deliveryCity + ", " + this.deliveryState + " " + this.deliveryZip }

// UI logic

$(document).ready(function() {
  
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    pizza.addToppings();
    addressInput();
    sizeInput();
    quantity();
    $("#pizza-specs").text(pizza.calculatePrice());
    $("#orderConfirmation").text(address.fullAddress);
    $("#order-confirmation").show(); 


  function sizeInput() {
  pizza.size = parseInt($("input:radio[name=size]:checked").val());
  }

  function quantity(){
  pizza.quantity = parseInt($("input:text[name=quantity]").val());
  }

console.log(pizza)
 function addressInput() {
   let deliveryStreetNumber = $("#delivery-street-number").val();
   let deliveryStreetName = $("#delivery-street-name").val();
   let deliveryCity = $("#delivery-city").val();
   let deliveryState = $("#delivery-state").val();
   let deliveryZip = $("#delivery-zip").val();
   let address = new DeliveryAddress (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
   $("#delivery-address").html(address.fullAddress())
 };
});
});