export interface QuackBehavior{
    quack(): void;
}

export class SimpleQuack implements QuackBehavior{
    quack():void{
        console.log('simple quack');
    }
}

export class MuteQuack implements QuackBehavior{
    quack():void{
        //No Implementation
    }
}

export class Squeak implements QuackBehavior{
    quack():void{
        console.log('Squeak Sound');
    }
}