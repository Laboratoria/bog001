const Nav = ({ setState }) => {
  const el = document.createElement('nav');

  el.innerHTML = `
    <a href="/">Home</a>
    <a href="/works">Works</a>
    <a href="/about">About</a>
  `;

  el.addEventListener('click', (e) => {
    e.preventDefault();
    setState({ route: e.target.getAttribute('href') });
  });

  return el;
};

export default Nav;