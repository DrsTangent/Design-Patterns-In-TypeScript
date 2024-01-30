"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChicagoStyleCheesePizza = exports.NYStyleCheesePizza = exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.name = "";
        this.dough = "";
        this.sauce = "";
        this.toppings = [];
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing" + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (var i = 0; i < this.toppings.length; i++) {
            console.log("\t" + this.toppings[i]);
        }
    };
    Pizza.prototype.bake = function () {
        console.log("Bake for 25 minutes at 350");
    };
    Pizza.prototype.cut = function () {
        console.log("Cutting the pizza into diagonal slices");
    };
    Pizza.prototype.box = function () {
        console.log("Place pizza in official PizzaStore box");
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
exports.Pizza = Pizza;
var NYStyleCheesePizza = /** @class */ (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = "NY Style Sauce and Cheese Pizza";
        _this.dough = "Thin Crust Dough";
        _this.sauce = "Marinara Sauce";
        _this.toppings.push("Grated Reggiano Cheese");
        return _this;
    }
    return NYStyleCheesePizza;
}(Pizza));
exports.NYStyleCheesePizza = NYStyleCheesePizza;
var ChicagoStyleCheesePizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleCheesePizza, _super);
    function ChicagoStyleCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = "Chicago Style Deep Dish Cheese Pizza";
        _this.dough = "Extra Thick Crust Dough";
        _this.sauce = "Plum Tomato Sauce";
        _this.toppings.push("Shredded Mozzarella Cheese");
        return _this;
    }
    ChicagoStyleCheesePizza.prototype.cut = function () {
        console.log("Cutting the pizza into square slices");
    };
    return ChicagoStyleCheesePizza;
}(Pizza));
exports.ChicagoStyleCheesePizza = ChicagoStyleCheesePizza;
