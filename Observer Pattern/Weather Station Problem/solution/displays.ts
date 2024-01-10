import { WeatherObserver, WeatherStation } from "./weatherStation";

export interface Display{
    display():void;
}

export class CurrentWeatherDisplay implements Display, WeatherObserver{
    private temperature:Number;
    private humidity: Number;
    private weatherCondition: String;
    private ws: WeatherStation;
    constructor(ws: WeatherStation){
        this.ws = ws;
        this.temperature = ws.getTemperature();
        this.humidity = ws.getHumidity();
        this.weatherCondition = ws.getWeatherCondition();
    }

    update():void{
        this.temperature = this.ws.getTemperature();
        this.humidity = this.ws.getHumidity();
        this.weatherCondition = this.ws.getWeatherCondition();
    }

    display():void{
        console.log(`Temperature: ${this.temperature}\nHumidity: ${this.humidity}\nWeather Condition: ${this.weatherCondition}`)
    }
}