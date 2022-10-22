let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

console.log(`Before: `);
console.log(obj);

obj.bar.xyz = 606;

console.log(`After: `);
console.log(obj);