const validatePhoneNumber = (input) => {
  if (typeof input !== 'string') {
    throw TypeError(`Esperaba string y recibí ${typeof input}`);
  }

  if (input.length !== 7) {
    return false;
  }
  return true;
};

module.exports = validatePhoneNumber;