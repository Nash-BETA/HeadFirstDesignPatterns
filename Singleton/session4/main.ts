import { Singleton } from "../session1/Singleton";
import { CoolerSingleton } from "./CoolerSingleton";
import { HotterSingleton } from "./HotterSingleton";

class Main{
	//Mainクラスの実行をstaticで実装
	static testMain() {
		const boiler: Singleton = CoolerSingleton.getInstance();
		console.log(boiler);

		// 既存の読み込み
		const boiler2: Singleton = CoolerSingleton.getInstance();
		console.log(boiler2);

		//別のインスタンスの読み込み
		const boiler3: Singleton = HotterSingleton.getInstance();
		console.log(boiler3);
	}
}

Main.testMain();