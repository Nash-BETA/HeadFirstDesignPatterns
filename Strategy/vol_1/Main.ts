import { Duck } from './Duck'
import { RubberDuck } from './RubberDuck'
import { RedHeadDuck } from './RedHeadDuck'
import { DecoyDuck } from './DecoyDuck'

class Main {

    m():void{
        const duck1:Duck = new RubberDuck();
        duck1.fly();

        const duck2: Duck = new RedHeadDuck();
        duck2.fly();

        const duck3: Duck = new DecoyDuck();
        duck3.fly();
    }
}

const test = new Main();
test.m();