import { Amplifier } from "./Amplifier";
import { CdPlayer } from "./CdPlayer";
import { DvdPlayer } from "./DvdPlayer";
import { HomeTheaterFacade } from "./HomeTheaterFacade";
import { PopcornPopper } from "./PopcornPopper";
import { Projector } from "./Projector";
import { Screen } from "./Screen";
import { TheaterLights } from "./TheaterLights";
import { Tuner } from "./Tuner";

class HomeTheaterTestDrive {
	static main() {
		const amp: Amplifier = new Amplifier("Top-O-Line Amplifier");
		const tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
		const dvd: DvdPlayer = new DvdPlayer("Top-O-Line DVD Player", amp);
		const cd: CdPlayer = new CdPlayer("Top-O-Line CD Player", amp);
		const projector: Projector = new Projector("Top-O-Line Projector", dvd);
		const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
		const screen: Screen = new Screen("Theater Screen");
		const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

		const homeTheater: HomeTheaterFacade =
			new HomeTheaterFacade(amp, tuner, dvd, cd,
				projector, screen, lights, popper);

		homeTheater.watchMovie("Raiders of the Lost Ark");
		homeTheater.endMovie();
	}
}

HomeTheaterTestDrive.main();