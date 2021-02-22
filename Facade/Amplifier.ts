import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { Tuner } from "./Tuner";

export class Amplifier {
	public description: string ;
	public tuner?: Tuner;
	public dvd?: DvdPlayer;
	public cd?: CdPlayer;

	public constructor(description:string) {
		this.description = description;
	}

	public on():void {
		console.log(this.description + ' on');
	}

	public off():void {
		console.log(this.description + ' off');
	}

	public setStereoSound():void {
		console.log(this.description + ' stereo mode on');
	}

	public setSurroundSound():void {
		console.log(this.description + ' surround sound on (5 speakers, 1 subwoofer)');
	}

	public setVolume(level:number): void {
		console.log(this.description + ' setting volume to ' + level);
	}

	public setTuner(tuner: Tuner): void {
		console.log(this.description + ' setting tuner to ' + this.dvd);
		this.tuner = tuner;
	}

	public setDvd(dvd: DvdPlayer): void {
		console.log(this.description + ' setting DVD player to ' + dvd);
		this.dvd = dvd;
	}

	public setCd(cd: CdPlayer): void {
		console.log(this.description + ' setting CD player to ' + cd);
		this.cd = cd;
	}

	public  toString():string {
		return this.description;
	}
}
