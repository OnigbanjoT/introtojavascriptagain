let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj =  Object.create(myProtoObj);
console.log(myObj.foo);
console.log(myObj.bar);


let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'

console.log(studentBob.age); // => 22

console.log(studentBob.year); // => 'Senior'
