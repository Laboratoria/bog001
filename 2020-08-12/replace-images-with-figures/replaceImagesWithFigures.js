const replaceImagesWithFigures = (container) => {
  // const imgs = [...container.querySelectorAll('img')];
  const imgs = container.querySelectorAll('img');

  for (let img of imgs) {
    if (img.parentElement.tagName ==='FIGURE') {
      continue;
    }
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = img.alt;
    img.replaceWith(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  }
};

export default replaceImagesWithFigures;