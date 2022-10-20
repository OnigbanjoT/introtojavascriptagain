let rlSync = require('readline-sync');
// ask user age
let age = Number(rlSync.question('How old are you? '));

for (let i = 10; i <= 40; i+= 10){
  console.log(`In ${i} years, you'll be ${age + i}`);
}