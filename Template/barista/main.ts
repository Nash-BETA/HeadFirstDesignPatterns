import { Coffee } from "./Coffee";
import { Tea } from "./Tea";
import { CoffeeWithHook } from "./CoffeeWithHook";
import { TeaWithHook } from "./TeaWithHook";

class Main {
	static m() {

		const tea:Tea = new Tea();
		const coffee: Coffee = new Coffee();

		console.log('\nMaking tea...');
		tea.prepareRecipe();

		console.log('\nMaking coffee...');
		coffee.prepareRecipe();


		const teaHook: TeaWithHook = new TeaWithHook();
		const coffeeHook: CoffeeWithHook = new CoffeeWithHook();

		console.log('\nMaking tea...');
		teaHook.prepareRecipe();

		console.log('\nMaking coffee...');
		coffeeHook.prepareRecipe();
	}
}
