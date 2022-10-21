
//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

function oddLengths(arr) {
  let arrLength = arr.map((e) => e.length);
  let oddLengths = arrLength.filter((e) => e % 2 != 0);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
