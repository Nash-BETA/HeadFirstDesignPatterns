import { Singleton } from "./Singleton";

class Main{
	//Mainクラスの実行をstaticで実装
	static testMain() {
    const singleton: Singleton = Singleton.getInstance();
    console.log(singleton);
		const singleton1: Singleton = Singleton.getInstance();
		console.log(singleton1);
	}
}

Main.testMain();