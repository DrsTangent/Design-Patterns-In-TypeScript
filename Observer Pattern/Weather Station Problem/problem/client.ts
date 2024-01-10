import { CurrentWeatherDisplay, Display } from "./displays";
import { WeatherStation } from "./weatherStation";

function main() {
    const ws = new WeatherStation();
    // Create two CurrentWeatherDisplay instances
    const currentWD:Display = new CurrentWeatherDisplay(ws);

    // Listen for the 'keypress' event
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (key: string) => {
        // Check if the pressed key is 'c' or 'C'
        if (key.toLowerCase() === 'c') {
            ws.changeValues();
        } else if (key === '\u0003') { // If 'Ctrl+C' is pressed, exit the program
            process.exit();
        }
    });
    setInterval(()=>{
        console.clear();
        currentWD.display();
    },16.6)//As Objects Increase Performance goes low and low//
}

// Run the main function
main();