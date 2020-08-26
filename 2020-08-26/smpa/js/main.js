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

window.addEventListener('load', () => {
  Array.from(document.querySelectorAll('a')).forEach((a) => {
    a.innerHTML = rainbowify(a);
  });
});