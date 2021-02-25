
export class GumballMachine {

	static SOLD_OUT :number = 0;
	static NO_QUARTER :number = 1;
	static HAS_QUARTER :number = 2;
	static SOLD :number = 3;

	public state: number = GumballMachine.SOLD_OUT;
	public count:number = 0;

	constructor(count:number) {
		this.count = count;
		if (count > 0) {
			this.state = GumballMachine.NO_QUARTER;
		}
	}

	insertQuarter():void{
		if (this.state == GumballMachine.HAS_QUARTER) {
			console.log("You can't insert another quarter");
		} else if (this.state == GumballMachine.NO_QUARTER) {
			this.state = GumballMachine.HAS_QUARTER;
			console.log("You inserted a quarter");
		} else if (this.state == GumballMachine.SOLD_OUT) {
			console.log("You can't insert a quarter, the machine is sold out");
		} else if (this.state == GumballMachine.SOLD) {
			console.log("Please wait, we're already giving you a gumball");
		}
	}

	ejectQuarter():void {
		if (this.state == GumballMachine.HAS_QUARTER) {
			console.log("Quarter returned");
			this.state = GumballMachine.NO_QUARTER;
		} else if (this.state == GumballMachine.NO_QUARTER) {
			console.log("You haven't inserted a quarter");
		} else if (this.state == GumballMachine.SOLD) {
			console.log("Sorry, you already turned the crank");
		} else if (this.state == GumballMachine.SOLD_OUT) {
			console.log("You can't eject, you haven't inserted a quarter yet");
		}
	}

	turnCrank() :void{
		if (this.state == GumballMachine.SOLD) {
			console.log("Turning twice doesn't get you another gumball!");
		} else if (this.state == GumballMachine.NO_QUARTER) {
			console.log("You turned but there's no quarter");
		} else if (this.state == GumballMachine.SOLD_OUT) {
			console.log("You turned, but there are no gumballs");
		} else if (this.state == GumballMachine.HAS_QUARTER) {
			console.log("You turned...");
			this.state = GumballMachine.SOLD;
			this.dispense();
		}
	}

	dispense():void {
		if (this.state == GumballMachine.SOLD) {
			console.log("A gumball comes rolling out the slot");
			this.count = this.count - 1;
			if (this.count == 0) {
				console.log("Oops, out of gumballs!");
				this.state = GumballMachine.SOLD_OUT;
			} else {
				this.state = GumballMachine.NO_QUARTER;
			}
		} else if (this.state == GumballMachine.NO_QUARTER) {
			console.log("You need to pay first");
		} else if (this.state == GumballMachine.SOLD_OUT) {
			console.log("No gumball dispensed");
		} else if (this.state == GumballMachine.HAS_QUARTER) {
			console.log("No gumball dispensed");
		}
	}

	refill(numGumBalls:number): void{
		this.count = numGumBalls;
		this.state = GumballMachine.NO_QUARTER;
	}

	toString():string {
		let result:string = '';
		result += "\nMighty Gumball, Inc.";
		result += "\nJava-enabled Standing Gumball Model #2004\n";
		result += "Inventory: " + this.count + " gumball";
		if (this.count != 1) {
			result = "s";
		}
		result = "\nMachine is ";
		if (this.state == GumballMachine.SOLD_OUT) {
			result = "sold out";
		} else if (this.state == GumballMachine.NO_QUARTER) {
			result = "waiting for quarter";
		} else if (this.state == GumballMachine.HAS_QUARTER) {
			result = "waiting for turn of crank";
		} else if (this.state == GumballMachine.SOLD) {
			result = "delivering a gumball";
		}
		result = "\n";
		return result.toString();
	}
}
