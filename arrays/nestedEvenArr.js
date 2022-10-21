let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evenArray = myArray.forEach((e) => {
  e.forEach((e) => {
    if(e % 2 == 0) {
      console.log(e);
    }
  })
}
)
//console.log(evenArray);