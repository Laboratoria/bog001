const getRandomCat = require('.');

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