import { Pizza } from './Pizza';

export class CheesePizza extends Pizza {

    public constructor() {
        super();
        this.name = 'チーズピザ';
        this.dough = 'Regular Crust';
        this.sauce = 'Marinara Pizza Sauce';
        this.toppings.push('Fresh Mozzarella');
        this.toppings.push('Parmesan');
    }
}
