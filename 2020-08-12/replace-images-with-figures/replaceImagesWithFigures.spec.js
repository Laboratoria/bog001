import replaceImagesWithFigures from './replaceImagesWithFigures.js';

describe('replaceImagesWithFigures', () => {
  it('debería reemplazar imagen', () => {
    const el = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'omg.png';
    img.alt = 'Blah';
    el.appendChild(img);

    replaceImagesWithFigures(el);

    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('FIGURE');
    expect(el.children[0].children.length).toBe(2);
    expect(el.children[0].children[0].tagName).toBe('IMG');
    expect(el.children[0].children[1].tagName).toBe('FIGCAPTION');
    expect(el.children[0].children[1].textContent).toBe('Blah');
  });

  it('debería ignorar imagen que ya está dentro de un figure', () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <div>
        <div>
          <figure>
            <img src="omg.png" alt="Blah blah blah" />
          </figure>
        </div>
      </div>
    `;

    expect(el).toMatchSnapshot();
    replaceImagesWithFigures(el);
    expect(el).toMatchSnapshot();
  });
});