import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { WeatherData } from './WeatherData'

/**
 * ForecastDisplay - 天気予報
 */
export class ForecastDisplay implements Observer,DisplayElement{
    currentPressure:number = 29.92;
    lastPressure:number = 0 ;
    weatherData: WeatherData ;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    /**
     * update - 基準値の更新
     * @param temp - 気温
     * @param humidity - 湿度
     * @param pressure - 気圧
     */
    update(temp: number, humidity: number, pressure: number){
        //元々の気圧を設定
        this.lastPressure = this.currentPressure;
        //新しい気圧を設定
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