/* Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
>>>>> 3
deepCount(["x", "y", ["z"]]);  
>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
>>>>> 7
The input will always be an array. */

let a = [
  29,
  [[[[[[]], [[]], 14]], [[[[]], [[]], [[]]]], [[4, [[]], [[]]]]]],
  [[29, [[[[]], [[]], [[]]]], 27]],
];
// function deepCount(a) {
//   let count = 0;
//   let res = [];
//   function func(a) {
//     for (let el of a) {
//       Array.isArray(el) ? (count++, func(el)) : res.push(el);
//     }
//     return count + res.length;
//   }
//   return func(a);
// }
// console.log(deepCount(a));

function deepCount(a) {
  let count = 0;
  let res = [];
  function func(a) {
    a.map((el) => (Array.isArray(el) ? (count++, func(el)) : res.push(el)));
    return count + res.length;
  }
  return func(a);
}

console.log(deepCount(a));
