const foo = () => {
  // ...
  console.log('soy foo');
  const b = bar();
};

const bar = () => {
  console.log('soy bar');
};

const a = foo();
console.log(a);