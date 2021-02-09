export class Singleton{

	static uniqueInstance:Singleton;
	static getInstance():Singleton{
		if(this.uniqueInstance == null){
			console.log('インスタンス未実施');
			return this.uniqueInstance = new Singleton();
		}
		console.log('インスタンス済み');
		return this.uniqueInstance;
	}
}