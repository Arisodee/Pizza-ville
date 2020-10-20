    function size() {
    let pizzaSize = $("#size").val();
    console.log ("pizzaSize", pizzaSize)
    return parseInt(pizzaSize);
    }
  function crust() {
    let pizzaCrust = $("#crust").val();
    console.log ("pizzaCrust", pizzaCrust)
    return parseInt(pizzaCrust);
    }
  function toppings() {
    let toppings = 0
    if ($("#mushroom").is(":checked")) {
      toppings=toppings+parseInt($("#mushroom").val());
    }
    if ($("#cheese").is(":checked")) {
      toppings=toppings+parseInt($("#cheese").val());
    }
    if ($("#olives").is(":checked")) {
      toppings=toppings+parseInt($("#olives").val());
    }
    if ($("#bacon").is(":checked")) {
      toppings=toppings+parseInt($("#bacon").val());
    }
    if ($("#peperoni").is(":checked")) {
      toppings=toppings+parseInt($("#peperoni").val());
    }
    if ($("#pineapple").is(":checked")) {
      toppings=toppings+parseInt($("#pineapple").val());
    }
    console.log ("toppings", toppings)
    return toppings;
    }
  function number() {
    let pizzaNumber = $("#number").val();
    console.log ("pizzaNumber", pizzaNumber)
    return parseInt(pizzaNumber);
    }
  function amountToPay (){
    let totalAmount = (size() + crust() + toppings()) * number();
    console.log ("totalAmount", totalAmount)
    return parseInt(totalAmount);
    }


  function calculateCost(){
  alert("You have Ordered " + number()  +  " pizza(s)."  +  ""  +  " Your total cost is kshs "  +  amountToPay());
  prompt("If you would like to have your pizza delivered at a cost of Ksh 100, please enter your location")
  alert("Your pizza will be ready in 30 minutes. " + " Thank you for ordering from us");
  
  // reset forms
  $("#pizza-form1").trigger("reset");
  $("#pizza-form2").trigger("reset");
  }

