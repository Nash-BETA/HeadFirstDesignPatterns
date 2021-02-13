
export class Light {

	private location:string;
	private level:number|undefined = 0;
	constructor(location:string) {
		this.location = location;
	}

	on(): void {
		this.level = 100;
		console.log('光を灯す');
	}

	off(): void {
		this.level = 0;
		console.log('光を消す');
	}

	dim(level:number|undefined) {
		this.level = level;
		if (level == 0) {
			this.off();
		}
		else {
			console.log('光の明るさは'+ this.level + '%' );
		}
	}

	public getLevel():number|undefined {
		return this.level;
	}

}
