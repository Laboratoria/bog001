export const solve = str => str.split('').reduce(
  (prev, char, i) => {
    const next = (i === str.length - 1) ? str[0] : str[i + 1];
    return (char === next)
      ? prev + parseInt(next, 10)
      : prev;
  },
  0,
);;

// export const solve = (str) => {
//   let sum = 0;
//   let i = 0;

//   while (i < str.length) {
//     let next;
//     if (i === str.length - 1) {
//       next = str[0];
//     } else {
//       next = str[i + 1];
//     }

//     if (str[i] === next) {
//       sum += parseInt(next, 10);
//     }

//     i += 1;
//   }

//   return sum;
// };

// export const solve = (str) => {
  // let sum = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     // const next = (i === str.length - 1) ? str[0] : str[i + 1];

//     let next;
//     if (i === str.length - 1) {
//       next = str[0];
//     } else {
//       next = str[i + 1];
//     }

//     if (str[i] === next) {
//       sum += parseInt(next, 10);
//     }
//   }

//   return sum;
// };