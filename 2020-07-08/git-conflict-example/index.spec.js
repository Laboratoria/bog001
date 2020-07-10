const { getRandomCat, validatePhoneNumber } = require('.');

describe('getRandomCat', () => {
  beforeEach(() => {
    global.fetch = () => Promise.resolve({ blob: () => {} });
  });

  afterEach(() => {});

  it('debería ser una función', () => {
    expect(typeof getRandomCat).toBe('function');
  });

  it('debería invocar fetch para sacar gato', (done) => {
    getRandomCat()
      .then((obj) => {
        console.log(obj);
        done();
      })
      .catch((err) => {
        console.error(err);
      });
  });

  it.skip('debería resolver a un objeto con blob, size, type', () => {});
});

describe('validatePhoneNumber', () => {
    it('debería arrojar un error cuando input no es string', () => {
        expect(() => validatePhoneNumber(1)).toThrow(TypeError);
    });

    it('debería retornar false para números que no tengan 7 dígitos', () => {
        expect(validatePhoneNumber('')).toBe(false);
    });
});