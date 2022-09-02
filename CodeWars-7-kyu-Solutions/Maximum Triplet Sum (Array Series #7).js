function maxTriSum(n) {
  let set = new Set(n);
  let arr = Array.from(set).sort((a, b) => b - a);
  let sum = arr[0] + arr[1] + arr[2];

  return sum;
}
