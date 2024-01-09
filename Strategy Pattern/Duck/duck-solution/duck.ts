import { FlyingBehavior, SimpleFlying, FlyingNoWay } from "./Flying";
import { QuackBehavior, SimpleQuack, Squeak, MuteQuack } from "./Quack";


class Duck{ 
    flyingBehavior: FlyingBehavior | undefined ;
    quackBehavior: QuackBehavior | undefined;

    performQuack(){
        if(this.quackBehavior)
            this.quackBehavior.quack();
    }

    performFly(){
        if(this.flyingBehavior)
            this.flyingBehavior.fly();
    }
    display(){
        console.log('display simple duck model');
    }
    public setFlyBehavior(fb: FlyingBehavior): void{ // To Change Behavior on Runtime even after object is created
        this.flyingBehavior = fb;
    }
    public setQuackBehavior(qb: QuackBehavior): void{ // To Change Behavior on Runtime even after object is created
        this.quackBehavior = qb;
    }
}

class MallardDuck extends Duck{
    constructor(){
        super();
        this.flyingBehavior = new SimpleFlying();
        this.quackBehavior = new SimpleQuack();
    }
    display(){
        console.log('display MallardDuck');
    }
}

class RedHeadedDuck extends Duck{
    constructor(){
        super();
        this.flyingBehavior = new SimpleFlying();
        this.quackBehavior = new SimpleQuack();
    }
    display(){
        console.log('display Red Headed Duck');
    }
}

class RubberDuck extends Duck{
    constructor(){
        super();
        this.flyingBehavior = new FlyingNoWay();
        this.quackBehavior = new Squeak();
    }
}

class DecoyDuck extends Duck{
    constructor(){
        super();
        this.flyingBehavior = new FlyingNoWay();
        this.quackBehavior = new MuteQuack();
    }
    display(){
        console.log('Display a wooden duck');
    }
}

/*
.
.
.
assuming 44 more sub classes and Changing can repetitive...
*/

let d = new Duck();
d.display()
d.performFly()
d.performQuack();

d = new MallardDuck();
d.display()
d.performFly()
d.performQuack();

d = new RubberDuck();
d.display()
d.performFly()
d.performQuack();

d = new DecoyDuck();
d.display()
d.performFly()
d.performQuack();