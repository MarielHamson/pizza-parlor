// // business logic 

// function Pizza (toppings, size) {
//   this.toppings = toppings;
//   this.size = size;
// }

// let pizza = new Pizza(toppings, size) 

// Pizza.prototype.cost = function() {
//   return this.toppings.length + (this.size)
// }

// // UI Logic 

// $(document).ready(function() {
//   $("form#pizza-order").submit(function(event) {
//       event.preventDefault();
//   $("input:checkbox[name=toppings]:checked").each(function() {
//     const inputToppings = $(this).val();
//     this.toppings = inputToppings;
//     console.log(this.toppings)
//     $("#pizza-specs").text(this.toppings);

//   })
// });
// });

let inputToppings = []
let inputSize;
let inputQuantity;
let pizza = new Pizza(inputToppings, inputSize, inputQuantity)

function Pizza (toppings, size, veganCrust, numberOfPizzas, totalPrice) {
this.toppings = toppings;
this.size = size;
this.veganCrust = veganCrust;
this.numberOfPizzas = numberOfPizzas;
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
    inputToppings.push($(this).val());
  });
}



Pizza.prototype.calculatePrice = function () {
  let toppingsTotal = parseInt(toppings.indexOf(length-1))
  let sizePrice;
    if (size === 1) {
      sizePrice = 10
    } else if (size === 2) {
      sizePrice = 15
    } else if (size === 3) {
      sizePrice = 20
    } 
    else {sizePrice = 0}
  this.totalPrice += (toppingsTotal + sizePrice) * numberOfPizzas
}

DeliveryAddress.prototype.fullAddress = function () {
  return this.deliveryStreetNumber + " " + this.deliveryStreetName + "<br>" + this.deliveryCity + ", " + this.deliveryState + " " + this.deliveryZip }

Pizza.prototype.clearOrder = function () {
  resetFields();
  orderReceived();
}

// UI logic

$(document).ready(function() {
  
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    pizza.addToppings();
    addressInput();
    $("#pizza-specs").text(pizza.toppings);
    $("#orderConfirmation").text(address.fullAddress);
    $("#order-confirmation").show();
  });
});
  
   let size = parseInt($("#size").val());
  let quantity = parseInt($("#quantity").val());

//  function veganCrustInput() {
//    if ($("input:radio[name=vegan-crust]:checked")) {
//    let veganCrust = true;
//    } else let veganCrust = false;
//  }

 function addressInput() {
   let deliveryStreetNumber = $("#delivery-street-number").val();
   let deliveryStreetName = $("#delivery-street-name").val();
   let deliveryCity = $("#delivery-city").val();
   let deliveryState = $("#delivery-state").val();
   let deliveryZip = $("#delivery-zip").val();
   let address = new DeliveryAddress (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
   $("#delivery-address").text(address.fullAddress())
   console.log(address.fullAddress())
 };