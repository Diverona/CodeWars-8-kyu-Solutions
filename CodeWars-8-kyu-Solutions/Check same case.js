/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1*/

// function sameCase(a, b) {
//   let aCode = a.codePointAt(0);
//   let bCode = b.codePointAt(0);

// обидві великі?
//   if (aCode >= 65 && aCode <= 90 && bCode >= 65 && bCode <= 90) return 1;

// обидві маленькі?
//   if (aCode >= 97 && aCode <= 122 && bCode >= 97 && bCode <= 122) return 1;

// одна велика, одна маленька?
//   if (aCode >= 65 && aCode <= 90 && bCode >= 97 && bCode <= 122) return 0;
//   if (aCode >= 97 && aCode <= 122 && bCode >= 65 && bCode <= 90) return 0;
//   else return -1;
// }

// ===============================

const isNotLetter = (s) => s === s.toUpperCase() && s === s.toLowerCase();
const defineCase = (s) => (s === s.toUpperCase() ? "U" : "L");

function sameCase(a, b) {
  return isNotLetter(a) || isNotLetter(b)
    ? -1
    : defineCase(a) === defineCase(b)
    ? 1
    : 0;
}

console.log(sameCase("a", "b"));
