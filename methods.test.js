const { stringLength, reverseString, calculator } = require('./index.js');

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

describe('Calculator', () => {
  describe('Addition', () => {
    test('sum of positive numbers', () => {
      const result = calculator.add(10, 5);
      expect(result).toBe(15);
    });

    test('sum of negative numbers', () => {
      const result = calculator.add(-10, -5);
      expect(result).toBe(-15);
    });

    test('sum of positive and negative numbers', () => {
      const result = calculator.add(-10, 5);
      expect(result).toBe(-5);
    });
  });

  describe('Subtraction', () => {
    test('subtraction of positive numbers', () => {
      const result = calculator.subtract(10, 5);
      expect(result).toBe(5);
    });

    test('subtraction of negative numbers', () => {
      const result = calculator.subtract(-10, -5);
      expect(result).toBe(-5);
    });

    test('subtraction of positive and negative numbers', () => {
      const result = calculator.subtract(-10, 5);
      expect(result).toBe(-15);
    });
  });

  describe('Division', () => {
    test('division of postive numbers', () => {
      const result = calculator.divide(10, 5);
      expect(result).toBe(2);
    });

    test('division of negative numbers', () => {
      const result = calculator.divide(-10, -5);
      expect(result).toBe(2);
    });

    test('division by zero should throw an error', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrowError('Cannot divide by zero');
    });
  });

  describe('Multiplication', () => {
    test('multiplication of positive numbers', () => {
      const result = calculator.multiply(10, 5);
      expect(result).toBe(50);
    });

    test('multiplication of negative numbers', () => {
      const result = calculator.multiply(-10, -5);
      expect(result).toBe(50);
    });

    test('multiplication of positive and negative numbers', () => {
      const result = calculator.multiply(10, -5);
      expect(result).toBe(-50);
    });
  });
});
