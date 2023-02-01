// Не моє
// function whoseBicycle(dairy1, dairy2, dairy3) {
//   const diaries = [dairy1, dairy2, dairy3];
//   console.log(diaries);
//   const son = {
//     0: 'first',
//     1: 'second',
//     2: 'third'
//   };
//   console.log(son);
//   const scores = diaries.map((diary, index) => {
//     const keys = Object.keys(diary);
//     console.log(keys);
//     return keys.reduce((acc, cur) => acc + diary[cur], 0);
//   });
//   console.log(scores);
//   const maxValue = Math.max(...scores);

//   const maxDiary = scores.lastIndexOf(maxValue);
//   console.log(maxDiary);
//   return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
// }

function whoseBicycle(diary1, diary2, diary3) {
  let marks1 = Object.values(diary1).reduce((sum, mark) => sum + mark, 0);
  let marks2 = Object.values(diary2).reduce((sum, mark) => sum + mark, 0);
  let marks3 = Object.values(diary3).reduce((sum, mark) => sum + mark, 0);

  if (marks1 > marks2 && marks1 > marks3)
    return "I need to buy a bicycle for my first son.";
  if (marks2 >= marks1 && marks2 > marks3)
    return "I need to buy a bicycle for my second son.";
  if (marks3 >= marks1 && marks3 >= marks2)
    return "I need to buy a bicycle for my third son.";
}
