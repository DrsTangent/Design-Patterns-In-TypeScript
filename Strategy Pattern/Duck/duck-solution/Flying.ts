export interface FlyingBehavior{
    fly(): void;
}

export class SimpleFlying implements FlyingBehavior{
    fly():void{
        console.log('simple flying')
    }
}

export class FlyingNoWay implements FlyingBehavior{
    fly():void{
        //Leave it Empty
    }
}