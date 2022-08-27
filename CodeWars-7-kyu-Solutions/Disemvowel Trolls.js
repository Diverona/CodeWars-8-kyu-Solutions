/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

// Це рішення не працює правильно, якщо кожної голосної більше ніж 1

// function disemvowel(str) {
//   let arr = str.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if ("aeiou".includes(arr[i]) || "AEIOU".includes(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr.join("");
// }

function disemvowel(str) {
  let arr = str.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res = arr.filter((char) => !vowels.includes(char)).join("");
  return res;
}

console.log(disemvowel("Taaaaaaaaaaaa"));
console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
