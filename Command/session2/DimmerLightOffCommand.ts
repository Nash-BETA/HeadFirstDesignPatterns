import { Command } from "./Command";
import { Light } from "./Ligt";

export class DimmerLightOffCommand implements Command {
  light: Light;
  prevLevel?: number;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.prevLevel = this.light.getLevel();
    this.light.off();
  }

  public undo(): void {
    this.light.dim(this.prevLevel);
  }
}
