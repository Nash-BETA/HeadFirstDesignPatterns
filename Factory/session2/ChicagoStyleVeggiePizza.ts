import { Pizza } from './Pizza';

export class ChicagoStyleVeggiePizza extends Pizza {

    public constructor() {
        super();
        this.name = 'シカゴディープディッシュベジピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'トマトソース';
        this.toppings.push('ほうれん草');
        this.toppings.push('オリーブ');
        this.toppings.push('モッツァレラチーズ');
        this.toppings.push('ゆで卵');
    }

    cut(): void {
        console.log('ピザを四角いスライスに切る');
    }
}