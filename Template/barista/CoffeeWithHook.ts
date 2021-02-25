import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";

export class CoffeeWithHook extends CaffeineBeverageWithHook {

	brew():void {
		console.log('Dripping Coffee through filter');
	}

	addCondiments(): void {
		console.log('Adding Sugar and Milk');
	}

	customerWantsCondiments(): boolean {

		let answer:string = this.getUserInput();

		if (answer.toLowerCase().startsWith('y')) {
			return true;
		} else {
			return false;
		}
	}

	private getUserInput():string {
		let answer:string = '';

		console.log('Would you like milk and sugar with your coffee (y/n)? ');

		try {
			answer = 'Yes';
		} catch (e) {
			console.log(`エラー発生 ${e}`);
		}
		if (answer == null) {
			return 'no';
		}
		return answer;
	}
}
