//
// función como sentencia
// hoisting!!!
//
function findFinalFloor(str) {
  return [...str].reduce(
    (prev, char) => char === '(' ? prev + 1 : prev - 1,
    0,
  );
}

module.exports = findFinalFloor;

//
// función _nombrada_ (con nombre) como expresión
//
// module.exports = function findFinalFloor(str) {
//   return [...str].reduce(
//     (prev, char) => char === '(' ? prev + 1 : prev - 1,
//     0,
//   );
// };

//
// función anónima como expresión
//
// module.exports = function (str) {
//   return [...str].reduce(
//     (prev, char) => char === '(' ? prev + 1 : prev - 1,
//     0,
//   );
// };

//
// función flecha...
//
// module.exports = str => [...str].reduce(
//   (prev, char) => char === '(' ? prev + 1 : prev - 1,
//   0,
// );

//
// Implementación imperativa (estado compartido a través de la vaiable
// `sum`, un bucle for y reasignación).
//
// module.exports = (str) => {
//   let sum = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] == '(') {
//       sum += 1;
//     } else if (str[i] === ')') {
//       sum -= 1;
//     }
//   }

//   return sum;
// };


//
// Función como _constructor_
//
function Dog() {
  console.log(arguments);
  this.foo = 1;
  // console.log(this);
}

console.log(new Dog(true, 2, 3, 4, 5));














