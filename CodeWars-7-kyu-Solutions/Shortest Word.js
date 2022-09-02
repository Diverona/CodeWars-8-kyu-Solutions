// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//
// function findShort(s) {
//   let arr = s.split(" ");
//   let res = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < res.length) {
//       res = arr[i];
//     }
//   }
//   return res.length;
// }

function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
