import { Beverage } from './Beverage';
import { DarkRoast } from './DarkRoast';
import { Espresso } from './Espresso';
import { Mocha } from './Mocha';
import { Whip } from './Whip';

class main {
    main() {
        let beverage:Beverage = new Espresso();
        console.log(beverage.getDescription() + beverage.cost() + ' 円');

        let beverage2: Beverage = new DarkRoast();
        //トッピング
        beverage2 = new Mocha(beverage2);
        beverage2 = new Mocha(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(beverage2.getDescription() + beverage2.cost() + ' 円');

    }
}

const m = new main();
m.main();