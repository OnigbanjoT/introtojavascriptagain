function evenOrOdd(number){
  if (!Number.isInteger(number)){
    return 'error NaN!';
  }

  if (number % 2 == 0){
    return 'even';
  }else {
    return 'odd';
  }
}

console.log(evenOrOdd(2));

console.log(evenOrOdd(3));

console.log(evenOrOdd(-2));


console.log(evenOrOdd('Ayo'));