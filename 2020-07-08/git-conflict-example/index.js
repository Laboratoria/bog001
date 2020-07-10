exports.getRandomCat = () => fetch('https://cataas.com/cat')
  .then(resp => resp.blob())
  .then(blob => ({
    blob,
  }));

exports.validatePhoneNumber = (input) => {
  if (typeof input !== 'string') {
    throw TypeError(`Esperaba string y recibí ${typeof input}`);
  }

  if (input.length !== 7) {
    return false;
  }
  return true;
};
