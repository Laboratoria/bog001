const NotFound = () => {
  const el = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Not found :-(';
  el.appendChild(h1);
  return el;
};

export default NotFound;