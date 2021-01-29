import { Duck } from './Duck';

//生きているアヒル
export class RedHeadDuck extends Duck{

    quack ():void{
        console.log('ガーガー');
        return;
    }
}