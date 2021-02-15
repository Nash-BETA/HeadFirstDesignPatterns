import { DuckAdapter } from './DuckAdapter';
import { MallardDuck } from './MallardDuck';
import { Turkey } from './Turkey';

class Main{
  static main (){
    const duck: MallardDuck = new MallardDuck();
    const duckAdapter: Turkey = new DuckAdapter(duck);

    let i :number;
    for(i = 0; i < 10; i++){
      console.log('duckAdapterは、');
      duckAdapter.gobble();
      duckAdapter.fly();
    }
  }
}

Main.main();