/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  let sumOfPos = 0;
  let sumOfNeg = 0;
  let result = [sumOfPos, sumOfNeg];

  if (typeof input == "undefined" || input == null || input == !isNaN) {
    return (result = []);
  } else {
    for (let int of input) {
      int > 0 ? (result[0] = ++sumOfPos) : (result[1] = sumOfNeg += int);
    }
    return result;
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
