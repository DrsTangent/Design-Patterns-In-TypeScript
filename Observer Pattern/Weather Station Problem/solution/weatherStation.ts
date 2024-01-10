export interface WeatherObservable{
    add(wo: WeatherObserver):void;
    remove(wo: WeatherObserver):void;
    notify():void;
}

export interface WeatherObserver{
    update():void;
}

export class WeatherStation implements WeatherObservable{
    private temperature:Number = 0;
    private humidity:Number = 0;
    private weatherCondition:String = "Fine";
    private subscribers:Array<WeatherObserver> = [];

    getTemperature():Number{
        return this.temperature; 
    }
    getHumidity():Number{
        return this.humidity; 
    }
    getWeatherCondition():String{
        return this.weatherCondition; 
    }

    add(wo: WeatherObserver):void{
        this.subscribers.push(wo);
    };
    remove(wo: WeatherObserver):void{
        this.subscribers = this.subscribers.filter((sub)=> sub !== wo);
    };
    
    notify():void{
        this.subscribers.forEach((sub)=>{
            sub.update();
        })
    };
    changeValues():void{
        this.temperature = Math.floor(Math.random()*100)-50;
        this.humidity = Math.floor(Math.random()*100);
        this.weatherCondition = "Fine"; // Doesn't Change :'(
        this.notify();
    }
}