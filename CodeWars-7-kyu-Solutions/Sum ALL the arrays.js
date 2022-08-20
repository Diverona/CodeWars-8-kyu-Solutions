// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

// Test.assertEquals(arraySum([1, 2]), 3);
// Test.assertEquals(arraySum([1, 2, 3]), 6);
// Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);

// function arraySum(arr) {
//   let sum = 0;

//   for (let elem of arr) {
//     if (typeof elem == "object") {
//       sum += arraySum(elem);
//     } else if (isNaN(parseFloat(elem))) sum;
//     else if (typeof elem == "string") {
//       sum += parseFloat(elem);
//     } else sum += elem;
//   }
//   return sum;
// }
// console.log(arraySum([1, [2, 7, 8], ["3h", 4, [5, [6, 7]]]]));

// =====================

// function arraySum(arr) {
//   let sum = 0;

//   for (let elem of arr) {
//     if (typeof elem === "object") {
//       sum += arraySum(elem);
//     } else if (typeof elem === "number") {
//       sum += elem;
//     }
//   }
//   return sum;
// }
// console.log(arraySum([1, [2, 7, 8], ["3h", 4, [5, "g", [6, 7]]]]));

// =====================

// function arraySum(arr) {
//   let sum = 0;
//   const b = arr.toString().split(",");

//   for (let i = 0; i < b.length; i++) {
//     sum += Number.isNaN(+b[i]) ? 0 : +b[i];
//   }
//   return sum;
// }

// console.log(arraySum([1, [2, 7, 8], ["3h", 4, [5, "g", [6, 7]]]]));

// ==========================

function arraySum(arr) {
  let sum = 0;
  const b = arr.toString().split(",");

  b.reduce((sum, el) => (Number.isNaN(el) ? 0 : +el), 0);

  return sum;
}

console.log(arraySum([1, [2, 7, 8], ["3h", 4, [5, "g", [6, 7]]]]));
