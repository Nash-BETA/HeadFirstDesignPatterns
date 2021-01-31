import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { WeatherData } from "./WeatherData";


export class HeatIndexDisplay implements Observer,DisplayElement{

    weatherData: WeatherData;
    heatIndex:number = 0;
    constructor(ob: WeatherData){
        this.weatherData = ob;
        ob.registerObserver(this);
    }

    /**
     * update - 基準値の更新
     * @param temp - 気温
     * @param humidity - 湿度
     * @param pressure - 気圧
     */
    update(temp: number, humidity: number, pressure: number){
        this.heatIndex = this.computeHeatIndex(temp,humidity);
        this.display();
    }

    display(){
        console.log('熱指数は'+ this.heatIndex);
    }

    /**
     * computeHeatIndex - 熱指数の算出
     * @param t
     * @param hu
     */
    private computeHeatIndex(t:number, hu:number):number {
        let index:number = ((16.923 + (0.185212 * t) + (5.37941 * hu) - (0.100254 * t * hu)
            + (0.00941695 * (t * t)) + (0.00728898 * (hu * hu))
            + (0.000345372 * (t * t * hu)) - (0.000814971 * (t * hu * hu)) +
            (0.0000102102 * (t * t * hu * hu)) - (0.000038646 * (t * t * t)) + (0.0000291583 *
                (hu * hu * hu)) + (0.00000142721 * (t * t * t * hu)) +
            (0.000000197483 * (t * hu * hu * hu)) - (0.0000000218429 * (t * t * t * hu * hu)) +
            0.000000000843296 * (t * t * hu * hu * hu)) -
            (0.0000000000481975 * (t * t * t * hu * hu * hu)));
        return index;
    }
}