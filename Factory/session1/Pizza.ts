export abstract class Pizza {

    //グローバル変数は具象クラスで定義している
    name:string = '';
    dough:string = '';
    sauce:string = '';
    toppings: string[] = [];

    /**
     * getName - 名前の受け取り
     */
    public getName() :string{
        return this.name;
    }

    /**
     * prepare - 準備中のテキストを出力
     */
    public prepare() :void{
        console.log(this.name + 'の準備を開始します。');
    }

    /**
     * bake - 焼成のテキストを出力
     */
    public bake():void {
        console.log(this.name + 'を焼いている最中');
    }

    /**
     * cut - カット中のテキストを返す
     */
    public cut():void {
        console.log(this.name + 'を切っています。');
    }

    /**
     * box - 箱詰め中のテキストを返す
     */
    public box():void {
        console.log(this.name + '箱詰め中');
    }

    public toString():string {
        let display:string;
        display = '---- ' + this.name + " ----\n";
        display =+ this.dough + "\n";
        display =+ this.sauce + "\n";
        let i:number;
        for (i = 0; i < this.toppings.length; i++) {
            display =+ this.toppings[i] + "\n";
        }
        return display.toString();
    }

}