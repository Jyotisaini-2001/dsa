/** @format */

var reverse = function (x) {
  var newX = 0;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  while (x !== 0) {
    var digit = x % 10;
    x = Math.trunc(x / 10);
    if (newX > INT_MAX / 10 || newX < INT_MIN / 10) return 0;

    newX = newX * 10 + digit;
  }
  return newX;
};

console.log(reverse(123));
