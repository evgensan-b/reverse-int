module.exports = function reverse(n) {
  const absoluteNumber = Math.abs(n);
  const numStr = absoluteNumber.toString();
  const reversedString = numStr.split('').reverse().join('');
  const result = parseInt(reversedString, 10);

  return result;
};
