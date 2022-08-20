// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// function distinct(a) {
//   let res = [];

//   for (let i = 0; i < a.length; i++) {
//     if (!res.includes(a[i])) {
//       res.push(a[i]);
//     }
//   }
//   return res;
// }

// console.log(distinct([1, 2, 1, 3, 3, 4, 6, 7, 7, 2]));

// ====================

// function distinct(a) {
//   let set = new Set(a);
//   return Array.from(set);
// }

// console.log(distinct([1, 1, 3, 3, 4, 6, 7, 7, 2]));

// =========================

// const distinct = (a) => Array.from(new Set(a));

// console.log(distinct([1, 2, 1, 3, 3, 4, 6, 7, 7, 2]));

// ========================

// function distinct(a) {
//   const items = {};
//   const res = [];

//   for (let i = 0; i < a.length; i++) {
//     if (!items[a[i]]) {
//       res.push(a[i]);
//       items[a[i]] = true;
//     }
//   }
//   return res;
// }

// =======================

const distinct = (a) => [...new Set(a)];
