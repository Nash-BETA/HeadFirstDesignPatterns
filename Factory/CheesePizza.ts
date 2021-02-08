import { Pizza } from './Pizza';

export class CheesePizza extends Pizza {

    public constructor() {
        super();
        this.name = 'チーズピザ';
        this.dough = 'レギュラークラスと';
        this.sauce = 'マリナーラピザソース';
        this.toppings.push('フレッシュモッツァレラチーズ');
        this.toppings.push('パルメザンチーズ');
    }
}
