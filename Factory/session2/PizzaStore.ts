import { Pizza } from "./Pizza";

/**
 * PizzaStore - ピザストアを抽象化
 */
export abstract class PizzaStore {

    //ピザ作成部分を具象クラスで実装
    //private factory: SimplePizzaFactory;
    //public constructor(factory: SimplePizzaFactory) {
    //    this.factory = factory;
    //}

    abstract createPizza(item: String): Pizza;

    public orderPizza(type:string):Pizza {
        let pizza: Pizza ;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

}
