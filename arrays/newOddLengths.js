//function oddLengths(arr) {
  //return arr.reduce((a, e) => {
    //let length = e.length;
//    newArr = a.push(length);
//    return newArr;
//  }, []);
//}


function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]