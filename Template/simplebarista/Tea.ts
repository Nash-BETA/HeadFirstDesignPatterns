export class Tea {

	prepareRecipe() {
		this.boilWater();
		this.steepTeaBag();
		this.pourInCup();
		this.addLemon();
	}

	boilWater() {
		console.log('Boiling water');
	}

	steepTeaBag() {
		console.log('Steeping the tea');
	}

	addLemon() {
		console.log('Adding Lemon');
	}

	pourInCup() {
		console.log('Pouring into cup');
	}
}
