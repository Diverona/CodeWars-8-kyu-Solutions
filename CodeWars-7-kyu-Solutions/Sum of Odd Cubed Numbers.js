// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0;
  for (let el of arr) {
    if (!isFinite(el)) return undefined;
    else if (el % 2 !== 0) {
      sum += Math.pow(el, 3);
    }
  }
  return sum;
}
