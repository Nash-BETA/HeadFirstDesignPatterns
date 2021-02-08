import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
    constructor(){
        super();
        this.description = 'ダークロースト';
    }

    cost():number{
        return 300;
    }
}