import { NYStyleCheesePizza, ChicagoStyleCheesePizza, Pizza } from "./pizza";

export class PizzaStore{
    city:String;
    constructor(city:String){
        if(city == "New York" || city == "Chicago")
            this.city = city;
        else
            throw "Pizza Store with provided city doesn't exist"
    }
    public orderPizza(type: String):Pizza {
        let pizza:Pizza;
        if(this.city == "New York"){
            if(type == "cheese"){
                pizza = new NYStyleCheesePizza();
            }
            else{
                throw "Pizza with given type doesn't exist";
            }
        }
        else{
            if(type == "cheese"){
                pizza = new ChicagoStyleCheesePizza();
            }
            else{
                throw "Pizza with given type doesn't exist";
            }
        }
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}