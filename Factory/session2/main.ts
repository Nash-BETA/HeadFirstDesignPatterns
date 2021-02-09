import { ChicagoPizzaStore } from './ChicagoPizzaStore';
import { NYPizzaStore } from './NYPizzaStore';
import { Pizza } from './Pizza';
import { PizzaStore } from './PizzaStore';
class Main {

    public main():void {

        let store: PizzaStore = new ChicagoPizzaStore();
        let pizza:Pizza = store.orderPizza("cheese");
        console.log("注文をしたのは " + pizza.getName() + "\n");

        let store1: PizzaStore = new NYPizzaStore();
        let pizza1: Pizza = store1.orderPizza("cheese");
        console.log("注文をしたのは " + pizza1.getName() + "\n");

    }
}

const m = new Main();
m.main();