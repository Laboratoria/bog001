import NotFound from './components/NotFound.js';

const render = (Component, root) => {
  root.innerHTML = '';
  const el = (Component || NotFound)();
  if (el instanceof HTMLElement) {
    root.appendChild(el);
  }
};

export default render;