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

reverseString('Are');

exports.stringLength = stringLength;
exports.reverseString = reverseString;