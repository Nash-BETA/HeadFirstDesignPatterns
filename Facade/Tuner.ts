import { Amplifier } from './Amplifier';

export class Tuner {
	description: string;
	amplifier: Amplifier;
	frequency?:string;

	constructor(description: string, amplifier: Amplifier) {
		this.description = description;
		this.amplifier = amplifier;
	}

	on():void  {
		console.log(this.description + ' on');
	}

	off():void  {
		console.log(this.description + ' off');
	}

	setFrequency(frequency:string) {
		console.log(this.description + ' setting frequency to ' + frequency);
		this.frequency = frequency;
	}

	setAm():void  {
		console.log(this.description + ' setting AM mode');
	}

	setFm():void  {
		console.log(this.description + ' setting FM mode');
	}

	toString():string  {
		return this.description;
	}
}
