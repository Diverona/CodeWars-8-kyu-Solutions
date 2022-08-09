// In this kata, the function will take a string as its argument,
// and return a string with every word replaced by the explanation
// to everything, according to Freud. Note that an empty string,
// or no arguments, should return an empty string.

function toFreud(string) {
  string
    ? (result = string
        .split(" ")
        .map((word) => (word = "sex"))
        .join(" "))
    : (result = "");

  return result;
}

console.log(toFreud(""));
console.log(toFreud("You're becoming a true freudian expert"));
