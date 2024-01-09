
class Duck{ 
    quack(){
        console.log('simple quack');
    }
    display(){
        console.log('display simple duck model');
    }
    //New Feature being added
    fly(){
        console.log('simple flying');
    }
}

class MallardDuck extends Duck{
    display(){
        console.log('display MallardDuck');
    }
}

class RedHeadedDuck extends Duck{
    display(){
        console.log('display Red Headed Duck');
    }
}

class RubberDuck extends Duck{
    quack(){
        console.log('Squeak'); // As Rubber Duck doesn't make quack sound
    }

    fly(){
        //There should be no implementation for this function
    }
}

class DecoyDuck extends Duck{
    quack(){
        //There should be no implementation for this function
    }
    display(){
        console.log('Display a wooden duck');
    }
    fly(){
        //There should be no implementation for this function => Repetition Violates DRY
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
d.fly()
d.quack();

d = new MallardDuck();
d.display()
d.fly()
d.quack();

d = new RubberDuck();
d.display()
d.fly()
d.quack();

d = new DecoyDuck();
d.display()
d.fly()
d.quack();