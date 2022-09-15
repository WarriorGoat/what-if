const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Please enter a number:  "));

// let r1 = number%3
// let r2 = number%5

// if (r1 === 0 && r2 > 0) {
//     console.log("fizz");
// } else if (r2 === 0 && r1 > 0) {
//     console.log("buzz");
// } else if (r1 ===0 && r2 === 0){
//     console.log("fizzbuzz");
// }

if (number % 15 === 0) {
    console.log("fizzbuzz");
} else if (nubmer % 3 === 0) {
    console.log("fizz");
} else if (number % 5 === 0) {
    console.log("buzz");
}