export class WeatherStation{
    private temperature:Number = 0;
    private humidity:Number = 0;
    private weatherCondition:String = "Fine";

    getTemperature():Number{
        return this.temperature; 
    }
    getHumidity():Number{
        return this.humidity; 
    }
    getWeatherCondition():String{
        return this.weatherCondition; 
    }
    changeValues():void{
        this.temperature = Math.floor(Math.random()*100)-50;
        this.humidity = Math.floor(Math.random()*100);
        this.weatherCondition = "Fine"; // Doesn't Change :'(

    }
}