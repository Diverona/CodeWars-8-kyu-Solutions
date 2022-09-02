// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//returns 3

function strCount(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      sum++;
    } else if (typeof obj[key] === "object") {
      sum += strCount(obj[key]);
    } else sum;
  }
  return sum;
}

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
  })
);
