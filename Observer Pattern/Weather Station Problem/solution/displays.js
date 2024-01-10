"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentWeatherDisplay = void 0;
var CurrentWeatherDisplay = /** @class */ (function () {
    function CurrentWeatherDisplay(ws) {
        this.ws = ws;
        this.temperature = ws.getTemperature();
        this.humidity = ws.getHumidity();
        this.weatherCondition = ws.getWeatherCondition();
    }
    CurrentWeatherDisplay.prototype.update = function () {
        this.temperature = this.ws.getTemperature();
        this.humidity = this.ws.getHumidity();
        this.weatherCondition = this.ws.getWeatherCondition();
    };
    CurrentWeatherDisplay.prototype.display = function () {
        console.log("Temperature: ".concat(this.temperature, "\nHumidity: ").concat(this.humidity, "\nWeather Condition: ").concat(this.weatherCondition));
    };
    return CurrentWeatherDisplay;
}());
exports.CurrentWeatherDisplay = CurrentWeatherDisplay;
