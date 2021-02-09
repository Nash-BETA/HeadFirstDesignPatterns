
export class ChocolateBoiler {
	private empty : boolean;
	private boiled: boolean;
	private static uniqueInstance: ChocolateBoiler;

	private constructor() {
		this.empty = true;
		this.boiled = false;
	}

	public static getInstance(): ChocolateBoiler  {
		if (this.uniqueInstance == null) {
			console.log('これからインスタンス化');
			this.uniqueInstance = new ChocolateBoiler();
		}
		console.log('インスタンスを返すよ！');
		return this.uniqueInstance;
	}

	//充填する
	public fill(): void {
		if (this.isEmpty()) {
			this.empty = false;
			this.boiled = false;
		}
	}

	//排出する
	public drain(): void  {
		if (!this.isEmpty() && this.isBoiled()) {
			this.empty = true;
		}
	}

	//沸騰させる
	public boil():void {
		if (!this.isEmpty() && !this.isBoiled()) {
			this.boiled = true;
		}
	}

	//emptyのboolean値を返す
	public isEmpty(): boolean {
		return this.empty;
	}

	//boiledのboolean値を返す
	public isBoiled():boolean {
		return this.boiled;
	}
}
