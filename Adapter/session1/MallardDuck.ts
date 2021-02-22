import { Duck } from "./Duck";

export class MallardDuck implements Duck {
  quack(): void {
    console.log('ガーガー');
  }

  fly(): void  {
    console.log('飛べる');
  }
}
