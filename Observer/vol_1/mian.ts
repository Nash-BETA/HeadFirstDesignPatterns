import { ForecastDisplay } from "./ForecastDisplay";
import { HeatIndexDisplay } from "./HeatIndexDisplay";
import { WeatherData } from "./WeatherData";

class main{
    start() {
        const weatherData: WeatherData = new WeatherData();
        //registerObserverメソッドでで登録するためにインスタンス化
        const forecastDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
        const heatIndexDisplay: HeatIndexDisplay = new HeatIndexDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);
//        weatherData.setMeasurements(80, 65, 30.4);
    }
}


const test = new main();
test.start();
