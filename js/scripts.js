 
  function size() {
    let pizzaSize = document.getElementById("size").value;
    return parseInt(pizzaSize);
  }
  function crust() {
    let pizzaCrust = document.getElementById("crust").value;
    return parseInt(pizzaCrust);
  }
  function toppings() {
    let pizzaTopping = document.getElementById("toppings").value;
    return parseInt(pizzaTopping);
  }
  function number() {
    var pizzaNumber = document.getElementById("number").value;
    return parseInt(pizzaNumber);
  }
  
  function pizza(size, crust, toppings, number) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
  }

  var inputtedValue = new pizza(size(), crust(), topping(), number());

  var amountToPay = (size() + crust()) * number();

  function calculateCost(){
  alert("You have Ordered " + number("")  +  " pizza(s)."  +  ""  +  " Your total cost is kshs "  +  (amountToPay));
  prompt("If you would like to have your pizza delivered at a cost of Ksh 100, please enter your location")
  alert("Your pizza will be ready in 30 minutes. " + " Thank you for ordering from us")
}