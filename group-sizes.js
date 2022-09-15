const prompt = require('prompt-sync')({sigint: true});

let size = Number(prompt("Please enter the class size: "));
console.log(`You entered ${size} for your selection.`);

let grp3 = 0
let grp2 = 0

grp3 = size / 3
grp2 = size % 3

if (grp2 === 0) {
    console.log(`If we have a class size of ${size}, we would create ${Math.floor(grp3)} groups of 3 and ${grp2} groups of 2.`);
} else if (grp2 === 1) {
    console.log(`If we have a class size of ${size}, we would create ${Math.floor(grp3)-1} groups of 3 and ${grp2+1} groups of 2.`);
} else if (grp2 ===2){
    console.log(`If we have a class size of ${size}, we would create ${Math.floor(grp3)} groups of 3 and ${grp2-1} group of 2.`);
} else {
    console.log("You have entered in invalid input!!");
}