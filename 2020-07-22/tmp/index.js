const map = (arr, fn) => arr.reduce(
  (prev, item) => [...prev, fn(item)],
  [],
);

const arr = [1, 2, 3];
const double = num => num * 2;

// console.log(arr.map(double));
// console.log(arr);

// console.log(map(arr, double));

// console.log(arr.filter(item => item > 2));


const x = [
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
  {name: 'c'},
  {name: 'c'},
];

// console.log(x.find(item => item.name === 'f'));
// console.log(x.filter(item => item.name === 'b')[0]);
// console.log(x.reduce((prev, item) => item.name === 'b' ? item : prev, undefined));
