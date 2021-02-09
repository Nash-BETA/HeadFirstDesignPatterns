import { Pizza } from './Pizza';

export class NYStyleCheesePizza extends Pizza {

    public constructor() {
        super();
        this.name = 'チーズピザ';
        this.dough = 'レギュラークラスと';
        this.sauce = 'マリナーラピザソース';
        this.toppings.push('フレッシュモッツァレラチーズ');
        this.toppings.push('パルメザンチーズ');
    }

    cut():void {
        console.log('ピザを四角いスライスに切る');
    }
}
