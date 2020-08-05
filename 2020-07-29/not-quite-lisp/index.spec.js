const findFinalFloor = require('.');

describe('findFinalFloor', () => {
  it('debería retornar 0 para (()) y ()()', () => {
    expect(findFinalFloor('(())')).toBe(0);
    expect(findFinalFloor('()()')).toBe(0);
  });

  it('debería retornar 3 para (((, (()(()(, ))(((((', () => {
    expect(findFinalFloor('(((')).toBe(3);
    expect(findFinalFloor('(()(()(')).toBe(3);
    expect(findFinalFloor('))(((((')).toBe(3);
  });

  it('debería retornar -1 para ()) y ))(', () => {
    expect(findFinalFloor('())')).toBe(-1);
    expect(findFinalFloor('))(')).toBe(-1);
  });
});