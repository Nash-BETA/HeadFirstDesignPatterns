import { LightOnCommand } from './LightOnCommand';
import { LightOffCommand } from './LightOffCommand';
import { Light } from './Ligt';
import { RemoteControlWithUndo } from './RemoteControlWithUndo';

class Main {
	static main() {
		const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();
		const livingRoomLight: Light = new Light("Living Room");

		const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
		const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

		remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);

		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
		console.log(remoteControl);
		remoteControl.undoButtonWasPushed();
		remoteControl.offButtonWasPushed(0);
		remoteControl.onButtonWasPushed(0);
		console.log(remoteControl);
		remoteControl.undoButtonWasPushed();
	}
}

Main.main();