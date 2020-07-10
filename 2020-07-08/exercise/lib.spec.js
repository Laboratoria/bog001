import { calculateRequiredFuel, processInput } from './lib.js';

describe('calculateRequiredFuel', () => {
  it('debería retornar 2 para input 12', () => {
    expect(calculateRequiredFuel(12)).toBe(2);
  });

  it('debería retornar 2 para input 14', () => {
    expect(calculateRequiredFuel(14)).toBe(2);
  });

  it('debería retornar 654 para input 1969', () => {
    expect(calculateRequiredFuel(1969)).toBe(654);
  });

  it('debería retornar 33583 para input 100756', () => {
    expect(calculateRequiredFuel(100756)).toBe(33583);
  });
});

describe('processInput', () => {
  it('debería retornar 6 para ...', () => {
    expect(processInput('12\n12\n14\n')).toBe(6);
  });
});