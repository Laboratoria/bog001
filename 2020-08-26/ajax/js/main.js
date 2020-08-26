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
    `${memo}<span style="color: ${rainbow[idx % rainbow.length]}">${char}<span>`
  ),
  '',
);

const handleClick = (e) => {
  e.preventDefault();

  fetch(e.currentTarget.href)
    .then(resp => resp.text())
    .then((html) => {
      const tmpEl = document.createElement('div');
      tmpEl.innerHTML = html;
      document.querySelector('main').replaceWith(tmpEl.querySelector('main'));
    })
    .catch(console.error);
};

window.addEventListener('load', () => {
  Array.from(document.querySelectorAll('a')).forEach((a) => {
    a.innerHTML = rainbowify(a);
    a.addEventListener('click', handleClick);
  });
});