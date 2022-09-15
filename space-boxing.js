const prompt = require('prompt-sync')({sigint: true});

let earthwt = Number(prompt("Please enter your weight on Earth in pounds: "));
console.log(`You entered ${earthwt} for your weight on earth.`);

if (!(earthwt > 0)) {
    console.log("You have entered an invalid weight.");
    fail;
}

console.log("Please enter the number of the planet you will be traveling to using the following system.  1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune");
let planetnum = Number(prompt(":  "));

if (planetnum === 1) {
    console.log(`You have indicated you will be traveling to Venus where you will weigh ${(earthwt * 0.78)} pounds.`);
} else if (planetnum === 2) {
    console.log(`You have indicated you will be traveling to Mars where you will weigh ${(earthwt * 0.39)} pounds.`);
} else if (planetnum === 3) {
    console.log(`You have indicated you will be traveling to Jupiter where you will weigh ${(earthwt * 2.65)} pounds.`);
} else if (planetnum === 4) {
    console.log(`You have indicated you will be traveling to Saturn where you will weigh ${(earthwt * 1.17)} pounds.`);
} else if (planetnum === 5) {
    console.log(`You have indicated you will be traveling to Uranus where you will weigh ${(earthwt * 1.05)} pounds.`);
} else if (planetnum === 6) {
    console.log(`You have indicated you will be traveling to Nepture where you will weigh ${(earthwt * 1.23)} pounds.`);
} else {
    console.log("You have made an invalid entry!!");
}


