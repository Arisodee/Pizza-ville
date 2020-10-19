$(document).ready(function() {
    $("#order-details").hide();
    });
    
    var priceTotal = [];
    function orderDetails(size, crust, toppings, number) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.number = number;
      this.pizzaPrice = 0
    }
    orderDetails.prototype.pizzaCost = function() {
      if (this.size === "small") {
        return this.pizzaPrice += 500;
      } else if (this.size === "medium") {
        return this.pizzaPrice += 800;
      } else if (this.size === "large") {
        return this.pizzaPrice += 1200;
      }

      if (this.crust === "crispy") {
        return this.pizzaPrice += 100;
      } else if (this.crust === "stuffed") {
        return this.pizzaPrice += 150;
      } else if (this.crust === "nogluten") {
        return this.pizzaPrice += 200;
      } 

      if (this.toppings === "mushroom") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "cheese") {
        this.pizzaPrice += 150;
      } else if (this.toppings === "olives") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "bacon") {
        this.pizzaPrice += 150;
      } else if (this.toppings === "peperoni") {
        this.pizzaPrice += 150;
      } else if (this.toppings === "pineapple") {
        this.pizzaPrice += 100;
      }
    };
