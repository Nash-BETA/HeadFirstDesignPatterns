import { Pizza } from './Pizza';

export class NYStyleClamPizza extends Pizza {

    public constructor() {
        super();
        this.name = 'NYスタイル・アサリピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'トマトソース';
        this.toppings.push('フレッシュモッツァレラチーズ');
        this.toppings.push('クレーム');
    }

    cut():void {
        console.log('ピザを四角いスライスに切る');
    }
}
