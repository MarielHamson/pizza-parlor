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
  let toppingsTotal = parseInt(toppings.indexOf(length-1))
  let sizePrice;
    if (sizeSmall === )) 
  )this.totalPrice += (toppingsTotal + sizePrice + crustTypePrice)
}

DeliveryAddress.prototype.fullAddress = function () {
  this.deliveryStreetNumber + " " + this.deliveryStreetName + "<br>" + this.deliveryCity + ", " + this.deliveryState + " " + this.deliveryZip }

Pizza.prototype.clearOrder = function () {
  resetFields();
  orderReceived();
}


}


// UI logic

$(document).ready(function() {
function toppingsInput(){
$("input:checkbox[name=toppings]:checked").forEach(function() {
  toppings.push($(this).val())
}
)};

function sizeInput(){
  let size = parseInt($("#sizeOptions").val());
};

function crustInput() {
  let crustType = $("input:radio[name=crust]:checked");
}

function veganCrustInput() {
  if ($("input:radio[name=vegan]:checked")) {
  let veganCrust = true;
  } else let veganCrust = false;
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


function resetFields() {
toppings = [];
size = 0;
crustType = 0;
deliveryStreetNumber = "";
deliveryStreetName = "";
deliveryCity = "";
deliveryState = "";
deliveryZip = "";
veganCrust = false
$("#toppings").reset();
$("#size").reset();
$("#quantity").reset();
$("#address").reset();
$("#vegan-crust").reset();
}

function orderReceived() {
  $("#order-confirmation").html("We have received your order and will delivery to: " + "<br>" + address.fullAddress)
}

$("#button > submit-order").click {
  clearOrder();
}

});