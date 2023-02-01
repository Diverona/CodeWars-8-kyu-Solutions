function minSum(arr) {
  let res = arr.sort((a, b) => a - b);
  let minSum = 0;
  for (let i = 0; i < res.length; i++) {
    minSum += res[i] * res.pop();
  }
  return minSum;
}
