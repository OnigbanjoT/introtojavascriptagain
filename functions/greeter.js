let rlSync = require('readline-sync');
// ask user for name
let firstname = rlSync.question('What is your first name? ');
let lastname = rlSync.question('What is your last name? ');

function fullName(firstname, lastname){
  return `Hello ${firstname} ${lastname}!`;
}

// display greetings
console.log(fullName(firstname, lastname));
