 
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
    let pizzaNumber = document.getElementById("number").value;
    return parseInt(pizzaNumber);
  }

  function amountToPay (){
    let totalAmount = (size() + crust() + toppings()) * number();
    return parseInt(totalAmount);
  }
  function calculateCost(){
  alert("You have Ordered " + number("")  +  " pizza(s)."  +  ""  +  " Your total cost is kshs "  +  ("totalAmount"));
  prompt("If you would like to have your pizza delivered at a cost of Ksh 100, please enter your location")
  alert("Your pizza will be ready in 30 minutes. " + " Thank you for ordering from us")
}
  $("form").reset();
  