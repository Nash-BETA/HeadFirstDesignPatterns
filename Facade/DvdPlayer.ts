import { Amplifier } from './Amplifier';

export class DvdPlayer {
	description:string;
	currentTrack?:number;
	amplifier: Amplifier;
	movie?:string|undefined|null;

	constructor(description:string, amplifier: Amplifier) {
		this.description = description;
		this.amplifier = amplifier;
	}

	on():void {
		console.log(this.description + ' on');
	}

	off():void {
		console.log(this.description + ' off');
	}

	eject():void {
	this.movie = null;
		console.log(this.description + ' eject');
	}

	play_movie(movie:string) {
		this.movie = movie;
		this.currentTrack = 0;
		console.log(this.description + ' playing \'' + movie + '\'');
	}

	play_track(track:number) {
		if (this.movie == null) {
			console.log(this.description + " can't play track " + track + ' no dvd inserted');
		} else {
			this.currentTrack = track;
			console.log(this.description + ' playing track ' + this.currentTrack + ' of \'' + this.movie + '\'');
		}
	}

	stop():void {
		this.currentTrack = 0;
		console.log(this.description + ' stopped \'' + this.movie + '\'');
	}

	pause():void {
		console.log(this.description + ' paused \'' + this.movie + '\'');
	}

	setTwoChannelAudio():void {
		console.log(this.description + ' set two channel audio');
	}

	setSurroundAudio():void {
		console.log(this.description + ' set surround audio');
	}

	toString():string {
		return this.description;
	}
}
