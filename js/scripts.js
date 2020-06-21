function Pizza(toppings, size, veganCrust, quantity, totalPrice) {
  this.toppings = [];
  this.size = size;
  this.veganCrust = veganCrust;
  this.quantity = quantity;
  this.totalPrice = totalPrice
}

function DeliveryAddress(deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip) {
  this.deliveryStreetNumber = deliveryStreetNumber;
  this.deliveryStreetName = deliveryStreetName;
  this.deliveryCity = deliveryCity;
  this.deliveryState = deliveryState;
  this.deliveryZip = deliveryZip;
}

Pizza.prototype.calculatePrice = function(pizza) {
  if (pizza.size === 1) {
    pizza.totalPrice = 15 * pizza.quantity
  } else if (pizza.size === 2) {
    pizza.totalPrice = 20 * pizza.quantity
  } else if (pizza.size === 3){
    pizza.totalPrice = 25 * pizza.quantity
  } 
  return pizza.totalPrice
}

DeliveryAddress.prototype.fullAddress = function() {
  return "<br>" + this.deliveryStreetNumber + " " + this.deliveryStreetName + "<br>" + this.deliveryCity + ", " + this.deliveryState + " " + this.deliveryZip
}

// UI logic

$(document).ready(function() {
  let inputToppings = []
  let inputSize;
  let inputQuantity;
  let veganCrust;
  let totalPrice;
  let pizza = new Pizza(inputToppings, inputSize, veganCrust, inputQuantity, totalPrice)
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    getToppings(pizza);
    addressInput();
    sizeInput(pizza);
    quantity(pizza);
    veganCrust(pizza);
    pizza.calculatePrice(pizza);
    $("#pizza-specs").html("<br>" + "Your pizza order total is $" + pizza.totalPrice + "." + "<br>" + "Your pizza toppings are: " + pizza.toppings + "." + "<br>" + "Your crust type is: " + pizza.veganCrust + "<br>" + "You ordered " + pizza.quantity + " pizzas");
    $("#orderConfirmation").text(address.fullAddress);
    $("#order-confirmation").show();

    function sizeInput(pizza) {
      pizza.size = parseInt($("input:radio[name=size]:checked").val());
    }

    function quantity(pizza) {
      pizza.quantity = parseInt($("input:text[name=quantity]").val());
    }

    function veganCrust(pizza) {
      pizza.veganCrust = $("input:radio[name=vegan-crust]:checked").val()
    }

    function getToppings(pizza) {
      $("input:checkbox[name=toppings]:checked").each(function() {
        pizza.toppings.push($(this).val());
      });
    }

    function addressInput() {
      let deliveryStreetNumber = $("#delivery-street-number").val();
      let deliveryStreetName = $("#delivery-street-name").val();
      let deliveryCity = $("#delivery-city").val();
      let deliveryState = $("#delivery-state").val();
      let deliveryZip = $("#delivery-zip").val();
      let address = new DeliveryAddress(deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
      $("#delivery-address").html(address.fullAddress())
    };
  });
});