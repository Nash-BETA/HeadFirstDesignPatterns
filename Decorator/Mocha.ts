import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Mocha extends CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage:Beverage) {
        super();
        this.beverage = beverage;
    }

    /**
     * getDescription - 現状の飲み物にトッピング名を追加する
     */
    getDescription():string {
        return this.beverage.getDescription() + ", 抹茶";
    }

    /**
     * cost - 現状の価格に費用を追加する
     */
    public cost():number {
        return 60 + this.beverage.cost();
    }
}
