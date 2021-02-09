
import { NYStyleCheesePizza } from './NYStyleCheesePizza';
import { NYStyleClamPizza } from './NYStyleClamPizza';
import { NYStyleVeggiePizza } from './NYStyleVeggiePizza';
import { PizzaStore } from './PizzaStore';

export class NYPizzaStore extends PizzaStore{

    createPizza(item: string){
        if (item == 'cheese') {
            return new NYStyleCheesePizza();
        } else if(item == 'veggie') {
            return new NYStyleVeggiePizza();
        } else {
            return new NYStyleClamPizza();
        }
    }
}