import { ChocolateBoiler } from "./ChocolateBoiler";

class Main{
	//Mainクラスの実行をstaticで実装
	static testMain() {
		const boiler: ChocolateBoiler = ChocolateBoiler.getInstance();
		boiler.fill();
		boiler.boil();
		boiler.drain();

		// 既存の読み込み
		const boiler2: ChocolateBoiler = ChocolateBoiler.getInstance();
	}
}

Main.testMain();