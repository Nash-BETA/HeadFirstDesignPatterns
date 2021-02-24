import { Coffee } from "./Coffee";
import { Tea } from "./Tea";

class Main {

	static m() {
		const tea:Tea = new Tea();
		const coffee: Coffee = new Coffee();
		console.log('Making tea...');
		tea.prepareRecipe();
		console.log('Making coffee...');
		coffee.prepareRecipe();
	}
}

Main.m();