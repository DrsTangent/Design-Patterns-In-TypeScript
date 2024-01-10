"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var displays_1 = require("./displays");
var weatherStation_1 = require("./weatherStation");
function main() {
    var ws = new weatherStation_1.WeatherStation();
    // Create two CurrentWeatherDisplay instances
    var currentWD = new displays_1.CurrentWeatherDisplay(ws);
    ws.add(currentWD);
    // Listen for the 'keypress' event
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (key) {
        // Check if the pressed key is 'c' or 'C'
        if (key.toLowerCase() === 'c') {
            ws.changeValues();
        }
        else if (key === '\u0003') { // If 'Ctrl+C' is pressed, exit the program
            process.exit();
        }
    });
    setInterval(function () {
        console.clear();
        currentWD.display();
    }, 16.6); //As Objects Increase Performance goes low and low//
}
// Run the main function
main();
