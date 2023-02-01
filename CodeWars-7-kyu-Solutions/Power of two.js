function isPowerOfTwo(n) {
  let rem = divideByTwo();

  return rem < 1 ? false : true;

  function divideByTwo() {
    if (n > 1) {
      n = n / 2;
      divideByTwo();
    }
    return n;
  }
}
