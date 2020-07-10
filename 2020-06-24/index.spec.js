const validatePhoneNumber = require('.');

describe('validatePhoneNumber', () => {
  it('debería arrojar un error cuando input no es string', () => {
    expect(() => validatePhoneNumber(1)).toThrow(TypeError);
  });

  it('debería retornar false para números que no tengan 7 dígitos', () => {
    expect(validatePhoneNumber('')).toBe(false);
  });
});