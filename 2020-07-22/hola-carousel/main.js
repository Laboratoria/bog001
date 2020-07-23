import data from './data.js';

const Carousel = (data) => {
  const el = document.createElement('div');
  el.className = 'carousel';
  let current = 0;

  const renderCurrent = () => {
    el.textContent = data[current].text;
    el.style.color = data[current].color;
    el.style.backgroundColor = data[current].bgColor;
  };

  el.addEventListener('click', () => {
    current = (current >= data.length - 1) ? 0 : current + 1;
    renderCurrent();
  });

  renderCurrent();

  return el;
};

const carousel = Carousel(data);

document.querySelector('#root').appendChild(carousel);