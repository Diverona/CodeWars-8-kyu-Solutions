/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

function maps(x) {
  return x.map((int) => int * 2);
}

let x = [1, 2, 3];
console.log(maps(x));
