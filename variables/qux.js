let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// output will be bar because console log statement is outside the scope of the scope of 2nd foo variable

