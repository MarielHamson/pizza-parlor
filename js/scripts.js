class Pizza {
  constructor(toppings, size, veganCrust, quantity, totalPrice) {
    this.toppings = toppings;
    this.size = size;
    this.veganCrust = veganCrust;
    this.quantity = quantity;
    this.totalPrice = totalPrice
  }

  calculatePrice() {
    if (this.size === 1) {
      this.totalPrice = 15 * this.quantity
    } else if (this.size === 2) {
      this.totalPrice = 20 * this.quantity
    } else if (this.size === 3){
      this.totalPrice = 25 * this.quantity
    } 
  }
};

class DeliveryAddress {
  constructor (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip) {
  this.deliveryStreetNumber = deliveryStreetNumber;
  this.deliveryStreetName = deliveryStreetName;
  this.deliveryCity = deliveryCity;
  this.deliveryState = deliveryState;
  this.deliveryZip = deliveryZip;
}

  fullAddress() {
    return `<br> ${this.deliveryStreetNumber} ${this.deliveryStreetName} <br> ${this.deliveryCity}, ${this.deliveryState} ${this.deliveryZip}`
  }
}

// UI logic

function addressInput() {
  let deliveryStreetNumber = $("#delivery-street-number").val();
  let deliveryStreetName = $("#delivery-street-name").val();
  let deliveryCity = $("#delivery-city").val();
  let deliveryState = $("#delivery-state").val();
  let deliveryZip = $("#delivery-zip").val();
  let address = new DeliveryAddress(deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
  $("#delivery-address").html(address.fullAddress())
};

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let inputToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      let toppings = $(this).val();
      inputToppings.push(toppings)
    let inputSize = parseInt($("input:radio[name=size]:checked").val());
    let inputQuantity = parseInt($("input:text[name=quantity]").val());
    let veganCrust = $("input:radio[name=vegan-crust]:checked").val();
    let totalPrice;
    let pizza = new Pizza(inputToppings, inputSize, veganCrust, inputQuantity, totalPrice)
    addressInput();
    pizza.calculatePrice();
    $("#pizza-specs").html(`<br> Your pizza order total is $ ${pizza.totalPrice}. <br> Your pizza toppings are: ${pizza.toppings}. <br> Your crust type is: ${pizza.veganCrust} <br> You ordered ${pizza.quantity} pizzas`);
    $("#orderConfirmation").text(address.fullAddress);
    $("#order-confirmation").show();
    });
    });
  });
