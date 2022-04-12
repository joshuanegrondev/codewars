// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/typescript

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

export { get_age };

function get_age(age: string): number {
  const number = parseInt(age.slice(0,1))
   return number
}

// /// <reference path="/runner/typings/mocha/index.d.ts" />
// /// <reference path="/runner/typings/chai/index.d.ts" />
// import solution = require('./solution');
// import {expect} from "chai";

// describe("Basic tests", () => {
//   it("Should work as expected", () => {
//     expect(solution.get_age("2 years old")).to.equal(2);
//     expect(solution.get_age("4 years old")).to.equal(4);
//     expect(solution.get_age("5 years old")).to.equal(5);
//     expect(solution.get_age("7 years old")).to.equal(7);
//   });
// });