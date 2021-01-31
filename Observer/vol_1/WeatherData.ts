import { Subject } from './Subject';
import { Observer } from './Observer';
/**
 * WeatherData - 発行者の具象クラス
 */
export class WeatherData implements Subject {

    public observers: Observer[];
    public temperature : number;
    public humidity : number;
    public pressure : number;


    constructor(){
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    /**
     * registerObserver - 観察対象の登録
     */
    registerObserver(ob: Observer){
        this.observers.push(ob);
    }

    /**
     * removeObserver - 観察対象の削除
     */
    removeObserver(ob: Observer): void{
        let i:number = this.observers.indexOf(ob);
        this.observers.splice(i);
    }

    /**
     * notifyObservers - 観察対象の通知
     */
    notifyObservers(): void{
        let i:number;
        for (i = 0; i > this.observers.length; ++i ){
            const Observer: Observer = this.observers[i]
            Observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    /**
     * setMeasurements - 測定結果の設定
     */
    public setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }

    getTemperature() {
        return this.temperature;
    }

    getHumidity() {
        return this.humidity;
    }

    getPressure() {
        return this.pressure;
    }

}
