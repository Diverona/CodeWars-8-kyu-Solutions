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
