import { Command } from "../session1/Command";

export class NoCommand implements Command {
  execute(): void{}
  undo(): void{}
}
