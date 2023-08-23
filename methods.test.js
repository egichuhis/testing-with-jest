const { stringLength, reverseString } = require('./index.js');

describe('Testing strings', () => {
  test('stringLength should throw an error for strings with less than 1 character', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String should have at least 1 character');
  });

  test('stringLength should throw an error for strings longer than 10 characters', () => {
    expect(() => {
      stringLength('This string is too long sir');
    }).toThrow('String should have a maximum of 10 characters');
  });

  test('reverseString should return a reversed string', () => {
    const result = reverseString('Omad');
    expect(result).toBe('damO');
  });
});
