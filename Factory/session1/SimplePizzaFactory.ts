import { CheesePizza } from './CheesePizza';
import { Pizza } from './Pizza';

class SimplePizzaFactory {
    public createPizza(type:string):Pizza {
        let pizza:Pizza;

        if (type == 'cheese') {
            pizza = new CheesePizza();
        } else if (type.equals('pepperoni')) {
            pizza = new PepperoniPizza();
        }

        return pizza;
    }
}
