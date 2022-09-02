// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str) {
//   let lowStr = str.toLowerCase();
//   let obj = {};

//   if (str.length === 0) return true;
//   else {
//     for (let el of lowStr) {
//       if (el in obj) {
//         return false;
//       } else {
//         obj[el] = 1;
//       }
//     }
//   }
//   return true;
// }

function isIsogram(str) {
  let set = new Set(str.toLowerCase());
  return set.size === str.length;
}
