/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100 */

// Victor Bogutskii https://www.youtube.com/watch?v=G159ypijakg&t=4206s

// function validParentheses(parens) {
//   const open = ["(", "{", "["];
//   const close = [")", "}", "]"];
//   const stack = [];

//   for (let i = 0; i < parens.length; i++) {
//     if (open.includes(parens[i])) {
//       stack.push(parens[i]);
//     } else {
//       if (close.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1])) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// Sergii Puzankov https://www.youtube.com/watch?v=C6CbIReHsNk

function validParentheses(parens) {
  let stack = [];
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < parens.length; i++) {
    const current = parens[i];

    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

function isClosedBracket(char) {
  return [")", "}", "]"].indexOf(char) > -1;
}
console.log(validParentheses("(({}))"));
