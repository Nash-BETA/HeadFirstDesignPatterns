import { Singleton } from "./Singleton";

export class CoolerSingleton extends Singleton{
	protected static uniqueInstance: Singleton;

	private constructor() {
		super();
	}

	test() {
		console.log('CoolerSingletonの中');
	}
}
