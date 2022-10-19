function multiply(){
let rlSync = require("readline-sync");
//get first number
let num1 = Number(rlSync.question("First Number: "));
//get second number
let num2 = Number(rlSync.question("Second Number: "));
// return product equation
return `${num1} * ${num2} = ${num1 * num2}`;
}

//display product
console.log(multiply());