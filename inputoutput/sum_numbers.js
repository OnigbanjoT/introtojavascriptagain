let rlSync = require('readline-sync');
// ask for two numbers from the user
let num1 = Number(rlSync.question('What is the first number: \n'));
let num2 = Number(rlSync.question('What is the second number: \n'));
// add them
let sum = num1 + num2;
// display the result
console.log(`${num1} + ${num2} = ${sum}`);