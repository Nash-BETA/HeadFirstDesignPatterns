import { Beverage } from "./Beverage";

//味付けの抽象クラス
export abstract class CondimentDecorator extends Beverage {
    public abstract getDescription():string;
}