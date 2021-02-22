import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class DuckAdapter implements Turkey {
  public duck:Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  /**
   * setRand - new Random()がないので関数で算出
   */
  setRand():number{
    //1以上10以下
    return Math.floor(Math.random() * 10) + 1;
  }

  gobble(): void {
    this.duck.quack();
  }

  fly(): void {
    if (this.setRand() == 1) {
      this.duck.fly();
    }
  }
}