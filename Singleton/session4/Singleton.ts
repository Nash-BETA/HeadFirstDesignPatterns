
export class Singleton{
    protected static uniqueInstance:Singleton;

    protected constructor(){
    }

    static  getInstance(){
        if (this.uniqueInstance == null){
            console.log('インスタンス化を実行');
            this.uniqueInstance = new Singleton();
        }
        console.log('インスタンスを返す');
        return this.uniqueInstance;
    }
}