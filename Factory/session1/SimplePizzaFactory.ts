import { CheesePizza } from './CheesePizza';
import { PepperoniPizza } from './PepperoniPizza';
import { Pizza } from './Pizza';

export class SimplePizzaFactory {
    public createPizza(type:string):Pizza {
        let pizza;

        if (type == 'cheese') {
            pizza = new CheesePizza();
        } else {
            pizza = new PepperoniPizza();
        }

        return pizza;
    }
}
