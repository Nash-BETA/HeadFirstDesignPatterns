import { Pizza } from './Pizza';
import { PizzaStore } from './PizzaStore';
import { SimplePizzaFactory } from './SimplePizzaFactory'
class Main {

    public main():void {
        let factory : SimplePizzaFactory = new SimplePizzaFactory();
        let store: PizzaStore = new PizzaStore(factory);

        let pizza:Pizza = store.orderPizza("cheese");
        console.log("注文をしたのは " + pizza.getName() + "\n");

    }
}

const m = new Main();
m.main();