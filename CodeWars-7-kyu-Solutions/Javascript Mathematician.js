// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.

// calculate(1)(1)  should return 2
// calculate(1,1)(1)  should return 3
// calculate(1,1)(1,-1)  should return 2
// calculate(2,4)(3,7,1)  should return 17

// function calculate(a, b) {

//   let arr1 = [];
//   let arr2 = [];

//   let str1 = String(a);
//   let str2 = String(b)

// let sum1 = 0, sum2 = 0;

// if (isFinite(str1)) {
//   arr1 = [...str1];
// } else arr1 = [0]

//   if (isFinite(str2)) {
//   arr2 = [...str2];
// } else arr2 = [0]

//   for (let el of arr1) {
//     console.log(typeof +el);
//     sum1 += +el;
//   }

//   for (let el of arr2) {
//     sum2 += +el;
//   }

//   return sum1 + sum2;

//   console.log(a, b);
// console.log(sum1, sum2);
//   console.log(sum1 + sum2);

// }

const calculate =
  (...x) =>
  (...y) => {
    return [].concat(x, y).reduce((a, b) => a + b, 0);
  };
