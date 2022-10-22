let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let objKeysUpCase = objKeys.map((n)=> n.toUpperCase());
console.log(objKeysUpCase);
console.log(obj);