import { Command } from "./Command";
import { Light } from "./Ligt";

export class LightOffCommand implements Command {
  light: Light;
  level?: number;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.level = this.light.getLevel();
    this.light?.off();
  }

  public undo(): void {
    this.light.dim(this.level);
  }
}
