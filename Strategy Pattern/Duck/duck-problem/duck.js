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
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.quack = function () {
        console.log('simple quack');
    };
    Duck.prototype.display = function () {
        console.log('display simple duck model');
    };
    //New Feature being added
    Duck.prototype.fly = function () {
        console.log('simple flying');
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MallardDuck.prototype.display = function () {
        console.log('display MallardDuck');
    };
    return MallardDuck;
}(Duck));
var RedHeadedDuck = /** @class */ (function (_super) {
    __extends(RedHeadedDuck, _super);
    function RedHeadedDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedHeadedDuck.prototype.display = function () {
        console.log('display Red Headed Duck');
    };
    return RedHeadedDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RubberDuck.prototype.quack = function () {
        console.log('Squeak'); // As Rubber Duck doesn't make quack sound
    };
    RubberDuck.prototype.fly = function () {
        //There should be no implementation for this function
    };
    return RubberDuck;
}(Duck));
var DecoyDuck = /** @class */ (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoyDuck.prototype.quack = function () {
        //There should be no implementation for this function
    };
    DecoyDuck.prototype.display = function () {
        console.log('Display a wooden duck');
    };
    DecoyDuck.prototype.fly = function () {
        //There should be no implementation for this function => Repetition Violates DRY
    };
    return DecoyDuck;
}(Duck));
/*
.
.
.
assuming 44 more sub classes
*/
var d = new Duck();
d.display();
d.fly();
d.quack();
d = new MallardDuck();
d.display();
d.fly();
d.quack();
d = new RubberDuck();
d.display();
d.fly();
d.quack();
d = new DecoyDuck();
d.display();
d.fly();
d.quack();
