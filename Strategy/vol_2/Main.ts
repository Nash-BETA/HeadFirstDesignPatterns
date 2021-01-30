import { Duck } from './Duck';
import { Quack } from './Quack';
import { RedHeadDuck } from './RedHeadDuck';

class Main {

    m():void{
        const duck1: Duck = new Duck(new Quack(),new RedHeadDuck());
        duck1.fly();
        duck1.quack();
    }
}

const test = new Main();
test.m();