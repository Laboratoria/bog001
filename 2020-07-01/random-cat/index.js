const getRandomCat = () => fetch('https://cataas.com/cat')
  .then(resp => resp.blob())
  .then(blob => ({
    blob,
  }));

module.exports = getRandomCat;