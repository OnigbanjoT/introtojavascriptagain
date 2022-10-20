let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  upperNames[index] = names[index].toUpperCase();
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']


function fibonacci(n){
  if (n < 2) {
    return n;
  } 

  return fibonacci(n - 2) + fibonacci(n - 1)
}