import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
  public turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    let i : number;
    for (i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}