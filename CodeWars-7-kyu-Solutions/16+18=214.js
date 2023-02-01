// function add(num1, num2) {
//   let arr1 = getArrfromNum(num1);
//   let arr2 = getArrfromNum(num2);

//   if (arr1.length < arr2.length) {
//     makeArrLengthsEqual(arr1, arr2);
//   } else makeArrLengthsEqual(arr2, arr1);

//   sumArrsByCharacters();

//   let res = getNumFromArr(sumArrsByCharacters());
//   return res;

//   function getArrfromNum(num) {
//     return num.toString().split("");
//   }

//   function makeArrLengthsEqual(arr1, arr2) {
//     if (arr1.length < arr2.length) {
//       arr1.unshift(0);
//       makeArrLengthsEqual(arr1, arr2);
//     }
//     return arr1;
//   }

//   function sumArrsByCharacters() {
//     let res = [];

//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         res.push(+arr1[i] + +arr2[i]);
//       }
//     }
//     return res;
//   }
//   function getNumFromArr(arr) {
//     return +arr.join("");
//   }
// }

function add(num1, num2) {
  let arr1 = getReversedArrfromNum(num1);
  let arr2 = getReversedArrfromNum(num2);

  let sumArr = sumArrsByCharacters();

  return getNumFromArr(sumArr);

  function getReversedArrfromNum(num) {
    return num.toString().split("").reverse();
  }

  function longerArr() {
    return arr1.length < arr2.length ? arr2.length : arr1.length;
  }

  function sumArrsByCharacters() {
    let res = [];
    for (let i = 0; i < longerArr(); i++) {
      res.push((Number(arr1[i]) || 0) + (Number(arr2[i]) || 0));
    }
    return res;
  }

  function getNumFromArr(arr) {
    return Number(arr.reverse().join(""));
  }
}

console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
console.log(add(1236, 30977));
console.log(add(49999, 49999));
