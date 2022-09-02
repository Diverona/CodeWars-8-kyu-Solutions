/* A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq
*/

function compose(s1, s2) {
  let arr1 = s1.split("\n");
  let arr2 = s2.split("\n");
  let res = [];

  for (let i = 0; i < arr1.length; i++) {
    res.push(
      arr1.at(i).slice(0, i + 1) + arr2.at(-i - 1).slice(0, arr2.length - i)
    );
  }
  return res.join("\n");
}
console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"));

// res[0] = [arr1.at(0).slice(0, 1) + arr2.at(-1).slice(0, 4)];
// res[1] = [arr1.at(1).slice(0, 2) + arr2.at(-2).slice(0, 3)];
// res[2] = [arr1.at(2).slice(0, 3) + arr2.at(-3).slice(0, 2)];
// res[3] = [arr1.at(3).slice(0, 4) + arr2.at(-4).slice(0, 1)];

// function compose(s1, s2) {
//   let arr1 = s1.split("\n");
//   let arr2 = s2.split("\n");
//   let res = [];

//   for (let i = 0; i < arr1.length; i++) {
//     res.push(
//       arr1[i].slice(0, i + 1) +
//         arr2[arr2.length - i - 1].slice(0, arr2.length - i)
//     );
//   }
//   return res.join("\n");
// }
// console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"));

//   res[0] = [arr1[0].slice(0, 1) + arr2[3].slice(0, 4)];
//   res[1] = [arr1[1].slice(0, 2) + arr2[2].slice(0, 3)];
//   res[2] = [arr1[2].slice(0, 3) + arr2[1].slice(0, 2)];
//   res[3] = [arr1[3].slice(0, 4) + arr2[0].slice(0, 1)];
