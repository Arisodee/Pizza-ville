

//Order array to contain all the orders that a customer selects

let ordersArray = []

function size() {
  let pizzaSize = $("#size").val();
  console.log("pizzaSize", pizzaSize)
  return parseInt(pizzaSize);
}
function crust() {
  let pizzaCrust = $("#crust").val();
  console.log("pizzaCrust", pizzaCrust)
  return parseInt(pizzaCrust);
}
function toppings() {
  let toppings = 0
  if ($("#mushroom").is(":checked")) {
    toppings = toppings + parseInt($("#mushroom").val());
  }
  if ($("#cheese").is(":checked")) {
    toppings = toppings + parseInt($("#cheese").val());
  }
  if ($("#olives").is(":checked")) {
    toppings = toppings + parseInt($("#olives").val());
  }
  if ($("#bacon").is(":checked")) {
    toppings = toppings + parseInt($("#bacon").val());
  }
  if ($("#peperoni").is(":checked")) {
    toppings = toppings + parseInt($("#peperoni").val());
  }
  if ($("#pineapple").is(":checked")) {
    toppings = toppings + parseInt($("#pineapple").val());
  }
  console.log("toppings", toppings)
  return toppings;
}
function number() {
  let pizzaNumber = $("#number").val();
  console.log("pizzaNumber", pizzaNumber)
  return parseInt(pizzaNumber);
}
function amountToPay() {
  let totalAmount = (size() + crust() + toppings()) * number();
  console.log("totalAmount", totalAmount)
  return parseInt(totalAmount);
}


function calculateCost() {
  alert("You have Ordered " + totalOrderItems() + " pizza(s)." + "" + " Your total cost is kshs " + calculateTotalCost());
}

function addPizza() {
  let pizzaOrder = new Order($("#availableFlavors").val(), $("#size").val(), $("#crust").val(), $("#number").val(), this.createToppingsArray(),this.amountToPay())
  ordersArray.push(pizzaOrder)
  // reset forms
  $("#pizza-form1").trigger("reset");
  $("#pizza-form2").trigger("reset"); 
  console.log(ordersArray)
}

function confirmOrder() {
  constructCheckoutCards()

  prompt("If you would like to have your pizza delivered at a cost of Ksh 100, please enter your location")
  alert("Your pizza will be ready in 30 minutes. " + " Thank you for ordering from us");

  // reset forms
  $("#pizza-form1").trigger("reset");
  $("#pizza-form2").trigger("reset");
}


//constructor for a pizza

function Order(flavor, size, crust, number, extraToppings,orderCost) {
  this.flavor = flavor
  this.size = size
  this.crust = crust
  this.number = number
  this.extraToppings = extraToppings
  this.orderCost = orderCost
}

function createToppingsArray() {

  let toppings = []
  if ($("#mushroom").is(":checked")) {
    toppings.push("mushroom")
  }
  if ($("#cheese").is(":checked")) {
    toppings.push("cheese")
  }
  if ($("#olives").is(":checked")) {
    toppings.push("olives")
  }
  if ($("#bacon").is(":checked")) {
    toppings.push("bacon")
  }
  if ($("#peperoni").is(":checked")) {
    toppings.push("peperoni")
  }
  if ($("#pineapple").is(":checked")) {
    toppings.push("pineapple")
  }
  return toppings
}

function calculateTotalCost(){
  if(!ordersArray || ordersArray.length === 0 ){
    addPizza()
  }
  let totalCost = 0;
  for(let i = 0; i < ordersArray.length; i++){
    totalCost += parseInt(ordersArray[i].orderCost)
  }
  return totalCost
}

function totalOrderItems(){
  if(!ordersArray || ordersArray.length === 0 ){
    addPizza()
  }
  return ordersArray.length
}

function constructCheckoutCards(){
  if(!ordersArray || ordersArray.length === 0 ){
    alert("Kindy select a pizza")
    return
}
  let cartItemsHtml = []
  for(let i = 0; i < ordersArray.length; i++){
    let cartItem = '<p class="card-title">Flavor: ' + 
    ordersArray[i].flavor + " Size-cost: " +
    ordersArray[i].size + " Crust-cost: " +
    ordersArray[i].crust + " Toppings: " +
    ordersArray[i].extraToppings + " Quantity: " +
    ordersArray[i].number + " Total-cost: " +
    ordersArray[i].orderCost +'</p>'
    cartItemsHtml.push(cartItem)
  }

  //add to page
  for(let j=0; j< cartItemsHtml.length; j++){
    let elem = document.createElement("div")
    elem.innerHTML = cartItemsHtml[j]
    document.getElementById("cartItems").appendChild(elem)
  }
}