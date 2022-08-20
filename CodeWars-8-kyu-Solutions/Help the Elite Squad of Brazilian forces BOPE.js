/*The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.*/

// function magNumber(info) {
//   let streets = info[1];
//   let shoots = streets * 3;
//   let magazines;

//   let weapon = { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 };
//   for (let key in weapon) {
//     if (info[0] === key) {
//       magazines = Math.ceil(shoots / weapon[key]);
//     }
//   }
//   return magazines;
// }
// console.log(magNumber(["PT92", 5]));

function magNumber(info) {
  const weapon = { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 };
  const streets = info[1];
  const shoots = streets * 3;

  return Math.ceil(shoots / weapon[info[0]]);
}
console.log(magNumber(["PT92", 5]));
