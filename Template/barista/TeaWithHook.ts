import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";

export class TeaWithHook extends CaffeineBeverageWithHook {

	brew():void {
		console.log('Steeping the tea');
	}

	addCondiments(): void {
		console.log('Adding Lemon');
	}

	customerWantsCondiments():boolean {

		let answer:string = this.getUserInput();

		if (answer.toLowerCase().startsWith('y')) {
			return true;
		} else {
			return false;
		}
	}

	private getUserInput(): string {
		// get the user's response
		let answer :string= '';

		console.log('Would you like lemon with your tea (y/n)? ');

		try {
			answer = 'no';
		} catch (e) {
			console.log(e);
		}
		if (answer == null) {
			return 'no';
		}
		return answer;
	}
}
