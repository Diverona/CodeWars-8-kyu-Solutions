// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords(s) {
  let check = [];
  let checkedArr = s.split(" ");
  for (let i = 0; i < checkedArr.length; i++) {
    if (!check.includes(checkedArr[i])) check.push(checkedArr[i]);
  }
  return check.join(" ");
}
