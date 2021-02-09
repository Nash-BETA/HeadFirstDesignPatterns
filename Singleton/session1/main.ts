import { Singleton } from "./Singleton";

class Main{
    main(){
        const singleton: Singleton = Singleton.getInstance();
        console.log(singleton);
    }

    //Mainクラスの実行をstaticで実装
    static testMain() {
        const singleton: Singleton = Singleton.getInstance();
        console.log(singleton);
    }
}

let m = new Main();
m.main();

Main.testMain();