import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { WeatherData } from './WeatherData'

export class ForecastDisplay implements Observer,DisplayElement{
    currentPressure:number = 29.92;
    lastPressure:number =0 ;
    weatherData: WeatherData ;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number){
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    display(){
        console.log('予報: ');
        if (this.currentPressure > this.lastPressure) {
            console.log('途中で天気が良くなる！');
        } else if (this.currentPressure == this.lastPressure) {
            console.log('特に変わらない！！');
        } else if (this.currentPressure < this.lastPressure) {
            console.log('雨天に気をつけろ');        }
    }
}