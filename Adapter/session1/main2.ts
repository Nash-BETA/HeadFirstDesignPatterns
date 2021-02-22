import { Duck } from './Duck';
import { MallardDuck } from './MallardDuck';
import { TurkeyAdapter } from './TurkeyAdapter';
import { WildTurkey } from './WildTurkey';


class Main2{
  static main (){
    const duck:MallardDuck = new MallardDuck();

    const turkey: WildTurkey = new WildTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

    console.log('ターキーは言った');
    turkey.gobble();
    turkey.fly();

    console.log('ダックは言った');
    this.testDuck(duck);

    console.log('ターキー変換機は言った');
    this.testDuck(turkeyAdapter);
  }

  static testDuck(duck: Duck):void {
    duck.quack();
    duck.fly();
  }
}

Main2.main();