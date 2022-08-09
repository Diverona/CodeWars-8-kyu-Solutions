// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello

function repeatStr(n, s) {
  let result = "";
  let i = 1;
  while (i <= n) {
    result = `${result}${s}`;
    i = i + 1;
  }
  return result;
}

console.log(repeatStr(8, "*"));
