function whoseBicycle(diary1, diary2, diary3) {
  let first = {
    diary: diary1,
    age: ageTable["firstSonAge"],
    score: 0,
  };

  let second = {
    diary: diary2,
    age: ageTable["secondSonAge"],
    score: 0,
  };

  let third = {
    diary: diary3,
    age: ageTable["thirdSonAge"],
    score: 0,
  };

  for (let value of Object.values(diary1)) {
    first["score"] += value;
  }
  for (let value of Object.values(diary2)) {
    second["score"] += value;
  }
  for (let value of Object.values(diary3)) {
    third["score"] += value;
  }
  let mark1 = first["score"];
  let mark2 = second["score"];
  let mark3 = third["score"];

  let marks = {
    first: mark1,
    second: mark2,
    third: mark3,
  };

  let max = 0;
  let maxName = null;
  let minAge = 100;

  for (const [son, mark] of Object.entries(marks)) {
    if (max < mark) {
      max = mark;
      maxName = son;
    } else if (mark1 === mark2) maxName = son[Math.max(mark1, mark2, mark3)];
    else if (mark1 === mark2 || mark1 === mark3 || mark2 === mark3) {
      //       for (const [son, age] of Object.entries(ageTable)) {
      //         if (minAge > age) {
      //           minAge = age;
      //           maxName = son;
      //         }
      //       }
      //     }
    }

    delete Object.assign(ageTable, { first: ageTable["firstSonAge"] })[
      "firstSonAge"
    ];
    delete Object.assign(ageTable, { second: ageTable["secondSonAge"] })[
      "secondSonAge"
    ];
    delete Object.assign(ageTable, { third: ageTable["thirdSonAge"] })[
      "thirdSonAge"
    ];
    console.log(first["score"]);
    console.log(second["score"]);
    console.log(third["score"]);

    console.log(maxName);
  }
  return `I need to buy a bicycle for my ${maxName} son.`;
}
