"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaStore = void 0;
var pizza_1 = require("./pizza");
var PizzaStore = /** @class */ (function () {
    function PizzaStore(city) {
        if (city == "New York" || city == "Chicago")
            this.city = city;
        else
            throw "Pizza Store with provided city doesn't exist";
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        if (this.city == "New York") {
            if (type == "cheese") {
                pizza = new pizza_1.NYStyleCheesePizza();
            }
            else {
                throw "Pizza with given type doesn't exist";
            }
        }
        else {
            if (type == "cheese") {
                pizza = new pizza_1.ChicagoStyleCheesePizza();
            }
            else {
                throw "Pizza with given type doesn't exist";
            }
        }
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
