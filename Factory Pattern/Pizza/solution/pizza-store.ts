import { NYStyleCheesePizza, ChicagoStyleCheesePizza, Pizza } from "./pizza";

export abstract class PizzaStore{
    public orderPizza(type: String):Pizza {
        let pizza:Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    abstract createPizza(type:String):Pizza;
}

export class NYPizzaStore extends PizzaStore{
    createPizza(type:String):Pizza{
        if(type == "cheese"){
            return new NYStyleCheesePizza();
        }
        throw new Error("Invalid type of pizza");
    }
}

export class ChicagoPizzaStore extends PizzaStore{
    createPizza(type:String):Pizza{
        if(type == "cheese"){
            return new ChicagoStyleCheesePizza();
        }
        throw new Error("Invalid type of pizza");
    }
}