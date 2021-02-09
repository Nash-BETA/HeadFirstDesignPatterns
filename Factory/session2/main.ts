import { ChicagoPizzaStore } from './ChicagoPizzaStore';
import { Pizza } from './Pizza';
import { PizzaStore } from './PizzaStore';
class Main {

    public main():void {

        let store: PizzaStore = new ChicagoPizzaStore();
        let pizza:Pizza = store.orderPizza("cheese");
        console.log("注文をしたのは " + pizza.getName() + "\n");

    }
}

const m = new Main();
m.main();