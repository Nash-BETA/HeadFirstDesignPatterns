/**
 * Beverage - 飲み物の抽象クラス
 */
export abstract class Beverage {
    //初期値
    description:string = "存在しない飲み物";

    /**
     * getDescription - 飲み物の名前を返す
     */
    public getDescription():string {
        return this.description;
    }

    /**
     * cost - 料金を返す(具象クラスで内容を実装)
     */
    public abstract cost():number;
}
