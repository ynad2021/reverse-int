module.exports = function reverse (n) {
  let result = 0;
  let nAbs = Math.abs(n);
  while (nAbs) {
      result = result * 10 + nAbs % 10;
      nAbs = Math.floor(nAbs / 10);
  };
  return result;
};