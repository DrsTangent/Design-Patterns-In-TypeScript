"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyingNoWay = exports.SimpleFlying = void 0;
var SimpleFlying = /** @class */ (function () {
    function SimpleFlying() {
    }
    SimpleFlying.prototype.fly = function () {
        console.log('simple flying');
    };
    return SimpleFlying;
}());
exports.SimpleFlying = SimpleFlying;
var FlyingNoWay = /** @class */ (function () {
    function FlyingNoWay() {
    }
    FlyingNoWay.prototype.fly = function () {
        //Leave it Empty
    };
    return FlyingNoWay;
}());
exports.FlyingNoWay = FlyingNoWay;
