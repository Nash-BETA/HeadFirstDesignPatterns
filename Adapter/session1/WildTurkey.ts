import { Turkey } from "./Turkey";

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log('グーグー');
  }

  fly(): void {
    console.log('短い距離飛べる');
  }
}