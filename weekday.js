const prompt = require('prompt-sync')({sigint: true});

let day = "error"
let daynum = Number(prompt("Please enter a number from 1 to 7 to select the day of the week: "));
console.log(`You entered ${daynum} for your selection.`);

if (daynum === 1) {
    day = "Monday";
} else if (daynum === 2) {
    day = "Tuesday";  
} else if (daynum === 3) {
    day = "Wednesday";  
} else if (daynum === 4) {
    day = "Thurssday";  
} else if (daynum === 5) {
    day = "Friday";  
} else if (daynum === 6) {
    day = "Saturday";  
} else if (daynum === 7) {
    day = "Sunday";  
} 

console.log(`The day you picked is ${day}.`)
