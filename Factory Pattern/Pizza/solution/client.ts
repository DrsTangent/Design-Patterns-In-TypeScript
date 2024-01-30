import { Pizza } from "./pizza";
import { ChicagoPizzaStore, NYPizzaStore, PizzaStore } from "./pizza-store";


function main(){

    let nyStore:PizzaStore = new NYPizzaStore();
    let chicagoStore:PizzaStore = new ChicagoPizzaStore();
    let pizza:Pizza = nyStore.orderPizza("cheese");
    console.log('Ethan ordered a ' + pizza.getName());
    pizza = chicagoStore.orderPizza("cheese");
    console.log('Joel ordered a ' + pizza.getName());
}

main();