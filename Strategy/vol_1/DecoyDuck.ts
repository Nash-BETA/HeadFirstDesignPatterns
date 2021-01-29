import { Duck } from './Duck'
//偽物のアヒル
export class DecoyDuck extends Duck {

    fly(): void {
        console.log('飛べません。');
        return;
    }

    swim(): void {
        console.log('浮きません。');
        return;
    }
}