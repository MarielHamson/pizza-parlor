// business logic 

function Pizza (toppings, size, crustType, veganCrust, numberOfPizzas, totalPrice)
this.toppings = [];
this.size = size;
this.crustType = crustType;
this.veganCrust = veganCrust;
this.numberOfPizzas = numberOfPizzas;
this.totalPrice = totalPrice

function DeliveryAddress (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
this.deliveryStreetNumber = deliveryStreetNumber;
this.deliveryStreetName = deliveryStreetName;
this.deliveryCity = deliveryCity;
this.deliveryState = deliveryState;
this.deliveryZip = deliveryZip;

Pizza.prototype.addToppings = function (topping) {
  this.toppings().push(topping);
}

Pizza.prototype.calculatePrice = function () {
  this.totalPrice += (toppingsTotal + sizePrice + crustTypePrice)
}

DeliveryAddress.prototype.fullAddress = function () {
  this.deliveryStreetNumber + " " + this.deliveryStreetName + "<br>" + this.deliveryCity + ", " + this.deliveryState + " " + this.deliveryZip }

Pizza.prototype.clearOrder = function () {
  resetFields();
  orderReceived();
}

// UI logic

$(document).ready(function() {
function toppingsInput(){
$("input:checkbox[name=toppings]:checked").forEach(function() {
  toppings.push($(this).val())}
)};

function sizeInput() {
  let size = $("input:radio[name=size]:checked");
}

function crustInput() {
  let crustType = $("input:radio[name=crust]:checked");
}

function addressInput() {
  let deliveryStreetNumber = $("#delivery-street-number".val());
  let deliveryStreetName = $("#delivery-street".val());
  let deliveryCity = $("#delivery-city".val());
  let deliveryState = $("#delivery-state".val());
  let deliveryZip = $("#delivery-zip".val());
  let address = new DeliveryAddress (deliveryStreetNumber, deliveryStreetName, deliveryCity, deliveryState, deliveryZip)
  $("#address-confirmation".text(address.fullAddress))
};





});