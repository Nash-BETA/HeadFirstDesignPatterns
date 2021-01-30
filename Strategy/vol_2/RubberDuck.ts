import { FlyBehavior } from './FlyBehavior';

//おもちゃのアヒル
export class RubberDuck implements FlyBehavior {

    fly():void{
        console.log('飛べません。');
        return;
    }
}