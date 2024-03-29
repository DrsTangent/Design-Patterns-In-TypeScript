"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherCondition = "Fine";
        this.subscribers = [];
    }
    WeatherStation.prototype.getTemperature = function () {
        return this.temperature;
    };
    WeatherStation.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherStation.prototype.getWeatherCondition = function () {
        return this.weatherCondition;
    };
    WeatherStation.prototype.add = function (wo) {
        this.subscribers.push(wo);
    };
    ;
    WeatherStation.prototype.remove = function (wo) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub !== wo; });
    };
    ;
    WeatherStation.prototype.notify = function () {
        this.subscribers.forEach(function (sub) {
            sub.update();
        });
    };
    ;
    WeatherStation.prototype.changeValues = function () {
        this.temperature = Math.floor(Math.random() * 100) - 50;
        this.humidity = Math.floor(Math.random() * 100);
        this.weatherCondition = "Fine"; // Doesn't Change :'(
        this.notify();
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
