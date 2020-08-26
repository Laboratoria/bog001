const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const rainbowify = el => [...el.textContent].reduce(
  (memo, char, idx) => (
    `${memo}<span style="color: ${rainbow[idx % rainbow.length]}">${char}</span>`
  ),
  '',
);

// const Intro = () => {
//   const el = document.createElement('div');
//   el.innerHTML = '<h1>Intro!!!</h1>';
//   el.addEventListener('click', () => {
//     navigateTo('/');
//   });
//   return el;
// };

// const Nav = () => {
//   const el = document.createElement('nav');
//   el.innerHTML = `
//     <a href="/">Home</a>
//     <a href="/works">Works</a>
//     <a href="/about">About</a>
//   `;
//   return el;
// };

// const Home = () => {
//   const el = document.createElement('div');
//   const main = document.createElement('div');
//   main.innerHTML = '<h1>Hola!</h1>';
//   el.appendChild(Nav());
//   el.appendChild(main);
//   return el;
// };

const Home = () => {
  const el = document.createElement('div');
  el.innerHTML = '<h1>Hola!</h1>';
  return el;
};

const About = () => {
  const el = document.createElement('div');
  el.innerHTML = '<h1>About</h1>';
  return el;
};

const Works = () => {
  const el = document.createElement('div');
  el.innerHTML = '<h1>Works</h1>';
  return el;
};

const NotFound = () => {
  const el = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Not found :-(';
  el.appendChild(h1);
  return el;
};


const routes = {
  '/': Home,
  '/about': About,
  '/works': Works,
};


const root = document.querySelector('main');
const render = (Component) => {
  root.innerHTML = '';
  const el = (Component || NotFound)();
  if (el instanceof HTMLElement) {
    root.appendChild(el);
  }
};

const handleClick = (e) => {
  const href = e.currentTarget.getAttribute('href');

  if (/^http/.test(href)) {
    return;
  }

  e.preventDefault();
  navigateTo(href);
};

const navigateTo = (url) => {
  render(routes[url]);
  window.history.pushState({}, '', url);
};

window.addEventListener('load', () => {
  Array.from(document.querySelectorAll('a')).forEach((a) => {
    a.innerHTML = rainbowify(a);
    a.addEventListener('click', handleClick);
  });

  window.addEventListener('popstate', () => {
    render(routes[window.location.pathname]);
  });

  render(routes[window.location.pathname]);
  // render(Intro);
});