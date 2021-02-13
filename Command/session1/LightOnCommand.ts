import { Command } from "./Command";
import { Light } from "./Ligt";

export class LightOnCommand implements Command {
	light?: Light;

	public constructor(light: Light) {
		this.light = light;
	}

	public execute():void {
	this.light?.on();
	}
}
