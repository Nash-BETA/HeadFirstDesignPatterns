export class Coffee {

	prepareRecipe() {
		this.boilWater();
		this.brewCoffeeGrinds();
		this.pourInCup();
		this.addSugarAndMilk();
	}

	boilWater() {
		console.log('Boiling water');
	}

	brewCoffeeGrinds() {
		console.log('Dripping Coffee through filter');
	}

	pourInCup() {
		console.log('Pouring into cup');
	}

	addSugarAndMilk() {
		console.log('Adding Sugar and Milk');
	}
}
