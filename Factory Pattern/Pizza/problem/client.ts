import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza-store";


function main(){

    let nyStore:PizzaStore = new PizzaStore("New York");
    let chicagoStore:PizzaStore = new PizzaStore("New York");
    let pizza:Pizza = nyStore.orderPizza("cheese");
    console.log('Ethan ordered a ' + pizza.getName());
    pizza = chicagoStore.orderPizza("cheese");
    console.log('Joel ordered a ' + pizza.getName());
}

main();