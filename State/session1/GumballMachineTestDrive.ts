import { GumballMachine } from "./GumballMachine";


class Main {
	static main() {
		const gumballMachine: GumballMachine = new GumballMachine(5);

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.ejectQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.ejectQuarter();

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine);
	}
}

Main.main();