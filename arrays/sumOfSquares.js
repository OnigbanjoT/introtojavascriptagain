function sumOfSquares(arr) {
  let sumOfSquares = arr.reduce((a, e) => a + e * e , 0)
  return sumOfSquares;
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83