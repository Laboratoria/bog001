import App from './components/App.js';
import render from './render.js';

window.addEventListener('load', () => {
  render(App, document.querySelector('#root'));
});
