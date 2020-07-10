import { processInput } from './lib.js';

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// const onClick = () => {
//   const result = processInput(textarea.value);
//   alert(`El resultado es: ${result}`);
// };

// button.addEventListener('click', onClick);


const textarea = document.querySelector('textarea');
const buttons = document.querySelector('.botones');

// const onClick = () => {
//   const result = processInput(textarea.value);
//   alert(`El resultado es: ${result}`);
// };

const onClick = (e) => {
  console.log(e.target.textContent);
};

// console.log(buttons);
buttons.addEventListener('click', onClick);

// for (let i = 0; i < buttons.length; i += 1) {
//   buttons[i].addEventListener('click', onClick);
// }