// function maxTriSum(n) {
//   let set = new Set(n);
//   let arr = Array.from(set).sort((a, b) => b - a);
//   let sum = arr[0] + arr[1] + arr[2];

//   return sum;
// }

// function maxTriSum(nums) {
//   let maxSum = 0;
//   let set = new Set(nums);
//   let arr = Array.from(set);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let k = 0; k < arr.length; k++) {
//         console.log(arr[i], arr[j], arr[k]);
//         if (arr[i] !== arr[j] && arr[i] !== arr[k] && arr[j] !== arr[k]) {
//           let tripleSum = arr[i] + arr[j] + arr[k];
//           if (tripleSum > maxSum) maxSum = tripleSum;
//         }
//       }
//     }
//   }
//   return maxSum;
// }

function maxTriSum(nums) {
  let maxSum = nums[1] + nums[2] + nums[3];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          let tripleSum = nums[i] + nums[j] + nums[k];
          if (tripleSum > maxSum) maxSum = tripleSum;
        }
      }
    }
  }
  return maxSum || 0;
}

// function maxTriSum(numbers) {
//   numbers.sort((a, b) => b - a);
//   let arr = numbers.filter((e, i) => numbers.indexOf(e) === i);
//   return arr[0] + arr[1] + arr[2];
// }

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));
