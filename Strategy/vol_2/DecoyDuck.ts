import { FlyBehavior } from './FlyBehavior';
//偽物のアヒル
export class DecoyDuck implements FlyBehavior {

    fly(): void {
        console.log('飛べません。');
        return;
    }
}