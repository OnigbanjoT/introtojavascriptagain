const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// no error, bar is logged to the screen b/c the constant variables are two seperate entities, existing outside of each others scope

