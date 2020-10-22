// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise). It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
  if(arr.indexOf(a) + 1 === arr.indexOf(b)){
    return true
  } else if(arr.indexOf(b) + 1 === arr.indexOf(a)){
    return true
  } else {
    return false
  }
}


// function consecutive(arr, a, b) {
//   return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
// }

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Simple tests", function() {
//   it("Test 1", function() {
//     assert.deepEqual(consecutive([1, 3, 5, 7], 3, 7), false);
//   });
//   it("Test 2", function() {
//     assert.deepEqual(consecutive([1, 3, 5, 7], 3, 1), true);
//   });
//   it("Test 3", function() {
//     assert.deepEqual(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
//   });
// });
