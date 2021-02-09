export class Singleton{
    //グローバル変数とメソッドどちらもstaticにしないとインスタンス化なしでは読み込まれない
    static uniqueInstance:Singleton = new Singleton();
    static getInstance():Singleton{
        return this.uniqueInstance;
    }
}