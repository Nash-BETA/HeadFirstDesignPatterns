import { Command } from "./Command";

export class SimpleRemoteControl {
    public slot?:Command;

    public constructor() {
    }

    public setCommand(command: Command):void {
        this.slot = command;
    }

    public buttonWasPressed(): void {
        this.slot?.execute();
    }
}
