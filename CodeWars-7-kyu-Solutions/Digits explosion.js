// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

function explode(s) {
  let res = "";

  for (let n of s) {
    res += n.repeat(n);
  }

  return res;
}
