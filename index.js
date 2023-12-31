function stringLength(string) {
  const strLength = string.length;

  if (strLength === 0) {
    throw new Error('String should have at least 1 character');
  }

  if (strLength > 10) {
    throw new Error('String should have a maximum of 10 characters');
  }

  return strLength;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  },
  multiply: (a, b) => a * b,
};

function capitalize(string) {
  const arrString = string.split('');
  arrString[0] = arrString[0].toUpperCase();
  return arrString.join('');
}

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.capitalize = capitalize;