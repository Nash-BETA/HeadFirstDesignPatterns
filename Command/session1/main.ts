import { GarageDoor } from './GarageDoor';
import { GarageDoorOpenCommand } from './GarageDoorOpenCommand';
import { LightOnCommand } from './LightOnCommand';
import { Light } from './Ligt';
import { SimpleRemoteControl } from './SimpleRemoteControl';
class Main {
	static main() {
		const remote: SimpleRemoteControl = new SimpleRemoteControl();
		const light:Light = new Light();
		const garageDoor: GarageDoor = new GarageDoor();
		const lightOn: LightOnCommand = new LightOnCommand(light);
		const garageOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);

		remote.setCommand(lightOn);
		remote.buttonWasPressed();
		remote.setCommand(garageOpen);
		remote.buttonWasPressed();
	}
}

Main.main();