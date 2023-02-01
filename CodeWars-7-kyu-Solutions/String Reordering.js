/* The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin' */

// function sentence(List) {
//   let arr = [];
//   let str = "";

//   for (let obj of List) {
//     arr.push(Object.entries(obj)[0]);
//   }

//   arr.sort(([a], [b]) => a - b);

//   for (let elem of arr) {
//     str += elem[1] + " ";
//   }
//   return str.trim();
// }

function sentence(List) {
  return List.sort((obj1, obj2) => Object.keys(obj1) - Object.keys(obj2))
    .map((obj) => Object.values(obj)[0])
    .join(" ");
}
