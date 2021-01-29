import { Duck } from './Duck';

//おもちゃのアヒル
export class RubberDuck extends Duck {

    fly():void{
        console.log('飛べません。');
        return;
    }
}