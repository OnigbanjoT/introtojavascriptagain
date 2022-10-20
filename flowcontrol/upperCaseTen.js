
// take in string argument
function upperCaseString(string){
  // calculate string length
  //  if length > 10 return uppercase string
  if(string.length > 10){
    return string.toUpperCase();
  } else {
//  otherwise return original string
    return string;
  }
}

console.log(upperCaseString('Welcome to the party'));

console.log(upperCaseString('less is m'));
