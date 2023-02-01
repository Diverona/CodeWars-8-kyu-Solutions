// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2

function getDecimal(n) {
  let arr = n.toString().split(".");
  return arr.length === 1 ? 0 : +(0 + "." + arr[1]);
}

function getDecimal(n) {
  let arrFromN = n.toString().split(".");
  let res = "0." + arrFromN[1];

  return +res || 0;
}
