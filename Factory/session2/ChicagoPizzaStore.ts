import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza';
import { ChicagoStyleClamPizza } from './ChicagoStyleClamPizza';
import { ChicagoStyleVeggiePizza } from './ChicagoStyleVeggiePizza';
import { PizzaStore } from './PizzaStore';

export class ChicagoPizzaStore extends PizzaStore{

    createPizza(item: string){
        if (item == 'cheese') {
            return new ChicagoStyleCheesePizza();
        } else if(item == 'veggie') {
            return new ChicagoStyleVeggiePizza();
        } else {
            return new ChicagoStyleClamPizza();
        }

    }
}