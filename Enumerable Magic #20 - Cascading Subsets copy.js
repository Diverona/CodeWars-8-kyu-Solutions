/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]
each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(array, n) {
  const result = [];

  for (let i = 0; i < array.length - n + 1; i++) {
    result.push(array.slice(i, i + n));
  }

  return result;
}
const array = [1, 2, 3, 4, 5];
console.log(eachCons(array, 1));
console.log(eachCons(array, 2));
console.log(eachCons(array, 3));
