import { Pizza } from './Pizza';

export class PepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = 'ペペロンチーノピザ';
        this.dough = 'クリスピー';
        this.sauce = 'マリナーラソース';
        this.toppings.push('サラミ');
        this.toppings.push('オニオン');
        this.toppings.push('パルメザンチーズ');
    }
}
