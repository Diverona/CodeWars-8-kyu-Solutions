// Given an array of integers, calculate the Average of these numbers.

// Main challenge is to write shortest and compact function for it.

// For example: var a = [0, 1, 2];
// avg(a)
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

let avg = (a) => a.reduce((res, el) => res + el, 0) / a.length;

console.log(avg([0, 1, 2]));
