import { FlyBehavior } from './FlyBehavior';

//生きているアヒル
export class RedHeadDuck implements FlyBehavior{

    fly(){
        console.log('空を飛ぶ');
    }
}