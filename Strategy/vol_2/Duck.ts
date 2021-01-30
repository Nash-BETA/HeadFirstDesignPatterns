import { QuackBehavior } from './QuackBehavior';
import { FlyBehavior } from './FlyBehavior';

export class Duck {
    set_quack_behavior: QuackBehavior;
    set_fly_behavior: FlyBehavior;

    constructor(set_quack_behavior: QuackBehavior, set_fly_behavior:FlyBehavior) {
        this.set_quack_behavior = set_quack_behavior;
        this.set_fly_behavior = set_fly_behavior;
    }

    quack():void{
        this.set_quack_behavior.quack();
        return;
    }

    fly():void{
        this.set_fly_behavior.fly();
        return;
    }


    swim():void{
        console.log('浮く！！');
        return;
    }

    display():void{
        console.log('表示！！');
        return;
    }
}