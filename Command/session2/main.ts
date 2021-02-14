import { LightOnCommand } from './LightOnCommand';
import { LightOffCommand } from './LightOffCommand';
import { Light } from './Ligt';
import { RemoteControlWithUndo } from './RemoteControlWithUndo';
import { CeilingFan } from './CeilingFan';
import { CeilingFanMediumCommand } from './CeilingFanMediumCommand';
import { CeilingFanHighCommand } from './CeilingFanHighCommand';
import { CeilingFanOffCommand } from './CeilingFanOffCommand';

class Main {
	static main() {
		const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();
		const livingRoomLight: Light = new Light('リビング');

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

		const ceilingFan: CeilingFan = new CeilingFan('リビング');

		const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
		const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
		const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

		remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
		remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
		console.log(remoteControl);
		remoteControl.undoButtonWasPushed();

		remoteControl.onButtonWasPushed(1);
		console.log(remoteControl);
		remoteControl.undoButtonWasPushed();
	}
}

Main.main();