import { Command } from "./Command";
import { Light } from "./Ligt";

export class DimmerLightOnCommand implements Command {
	light: Light;
	prevLevel?:number;

	public constructor(light: Light) {
		this.light = light;
	}

	public execute():void {
		this.prevLevel = this.light.getLevel();
		this.light.dim(75);
	}

	public undo():void {
		this.light.dim(this.prevLevel);
	}
}
