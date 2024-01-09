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
var Flying_1 = require("./Flying");
var Quack_1 = require("./Quack");
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.performQuack = function () {
        if (this.quackBehavior)
            this.quackBehavior.quack();
    };
    Duck.prototype.performFly = function () {
        if (this.flyingBehavior)
            this.flyingBehavior.fly();
    };
    Duck.prototype.display = function () {
        console.log('display simple duck model');
    };
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyingBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _this.flyingBehavior = new Flying_1.SimpleFlying();
        _this.quackBehavior = new Quack_1.SimpleQuack();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log('display MallardDuck');
    };
    return MallardDuck;
}(Duck));
var RedHeadedDuck = /** @class */ (function (_super) {
    __extends(RedHeadedDuck, _super);
    function RedHeadedDuck() {
        var _this = _super.call(this) || this;
        _this.flyingBehavior = new Flying_1.SimpleFlying();
        _this.quackBehavior = new Quack_1.SimpleQuack();
        return _this;
    }
    RedHeadedDuck.prototype.display = function () {
        console.log('display Red Headed Duck');
    };
    return RedHeadedDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        var _this = _super.call(this) || this;
        _this.flyingBehavior = new Flying_1.FlyingNoWay();
        _this.quackBehavior = new Quack_1.Squeak();
        return _this;
    }
    return RubberDuck;
}(Duck));
var DecoyDuck = /** @class */ (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        var _this = _super.call(this) || this;
        _this.flyingBehavior = new Flying_1.FlyingNoWay();
        _this.quackBehavior = new Quack_1.MuteQuack();
        return _this;
    }
    DecoyDuck.prototype.display = function () {
        console.log('Display a wooden duck');
    };
    return DecoyDuck;
}(Duck));
/*
.
.
.
assuming 44 more sub classes and Changing can repetitive...
*/
var d = new Duck();
d.display();
d.performFly();
d.performQuack();
d = new MallardDuck();
d.display();
d.performFly();
d.performQuack();
d = new RubberDuck();
d.display();
d.performFly();
d.performQuack();
d = new DecoyDuck();
d.display();
d.performFly();
d.performQuack();
