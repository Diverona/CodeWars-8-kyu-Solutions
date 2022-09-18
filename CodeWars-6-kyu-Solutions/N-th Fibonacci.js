/*I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

function nthFibo(n) {
  let fibo = [0, 1, 1];

  if (n < 3) return fibo[n - 1];
  else {
    for (let i = 3; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n - 1];
  }
}
