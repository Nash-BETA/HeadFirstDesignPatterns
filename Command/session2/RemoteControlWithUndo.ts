import { Command } from "./Command";
import { NoCommand } from "./NoCommand";

export class RemoteControlWithUndo {
	private onCommands: Command[];
	private offCommands: Command[];
	private undoCommand: Command;

	constructor() {
		this.onCommands = [];
		this.offCommands = [];

		const noCommand: Command = new NoCommand();
		let i :number;
		for (i = 0; i < 7; i++) {
			this.onCommands[i] = noCommand;
			this.offCommands[i] = noCommand;
		}
		this.undoCommand = noCommand;
	}

	setCommand(slot: number, onCommand: Command, offCommand: Command ):void {
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommand;
	}

	onButtonWasPushed(slot:number): void {
		this.onCommands[slot].execute();
		this.undoCommand = this.onCommands[slot];
	}

	offButtonWasPushed(slot:number): void {
		this.offCommands[slot].execute();
		this.undoCommand = this.offCommands[slot];
	}

	undoButtonWasPushed(): void {
		this.undoCommand.undo();
	}

	toString():string {
		let stringBuffer:string = '';
		stringBuffer += "\n------ Remote Control -------\n";
		let i :number;
		for (i = 0; i < this.onCommands.length; i++) {
			stringBuffer += "[slot " + i + "] " + this.onCommands[i].constructor.name + "    " + this.offCommands[i].constructor.name  + "\n";
		}
		stringBuffer += "[undo] " + this.undoCommand.constructor.name + "\n";
		return stringBuffer;
	}
}
