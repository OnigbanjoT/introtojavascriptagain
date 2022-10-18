let rlSync = require('readline-sync');
// ask user for name
let firstname = rlSync.question('What is your first name? ');
let lastname = rlSync.question('What is your last name? ');
// display greetings
console.log(`Hello ${firstname} ${lastname}!`);