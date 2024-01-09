"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squeak = exports.MuteQuack = exports.SimpleQuack = void 0;
var SimpleQuack = /** @class */ (function () {
    function SimpleQuack() {
    }
    SimpleQuack.prototype.quack = function () {
        console.log('simple quack');
    };
    return SimpleQuack;
}());
exports.SimpleQuack = SimpleQuack;
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        //No Implementation
    };
    return MuteQuack;
}());
exports.MuteQuack = MuteQuack;
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log('Squeak Sound');
    };
    return Squeak;
}());
exports.Squeak = Squeak;
