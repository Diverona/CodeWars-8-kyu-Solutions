// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let obj = {
    o: 0,
    x: 0,
  };

  for (let el of str) {
    if (el.toLowerCase() === "o") {
      obj["o"]++;
    } else if (el.toLowerCase() === "x") {
      obj["x"]++;
    }
  }
  return obj["o"] === obj["x"];
}
