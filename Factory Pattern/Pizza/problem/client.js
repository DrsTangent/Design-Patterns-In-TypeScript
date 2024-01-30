"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizza_store_1 = require("./pizza-store");
function main() {
    var nyStore = new pizza_store_1.PizzaStore("New York");
    var chicagoStore = new pizza_store_1.PizzaStore("Chicago");
    var pizza = nyStore.orderPizza("cheese");
    console.log('Ethan ordered a ' + pizza.getName());
    pizza = chicagoStore.orderPizza("cheese");
    console.log('Joel ordered a ' + pizza.getName());
}
main();
