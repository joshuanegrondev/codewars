// link https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript
// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.
//
// The function should be able to take up to 4 arguments:
//
// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:
//
// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
// When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:
//
// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
// Examples
// fizzBuzzCustom()[15]                         // returns 16
// fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
// fizzBuzzCustom('Hey', 'There')[25]         // returns 26
// fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
// fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)

var fizzBuzzCustom = function(stringOne='Fizz', stringTwo='Buzz', numOne=3, numTwo=5) {
//looping variable
  let x;
//empty array where variables are going to be pushed
  let arr=[];
//variable iterates through each number for 1-100
  for(x=1; x<100; x++)
    if(x % numOne === 0 && x % numTwo === 0){
      //push string into the array
      arr.push(stringOne + stringTwo)
    } else if(x % numOne === 0){
      arr.push(stringOne)
    } else if(x % numTwo === 0){
      arr.push(stringTwo)
    } else{
      arr.push(x)
    }
  //return the array with the numbers
  console.log(arr)
  return arr
};

// one liner
// var fizzBuzzCustom = function(s1='Fizz', s2='Buzz', n1=3, n2=5) {
//      return   [...Array(101).keys()].slice(1).map(v=> v%n1===0&&v%n2===0?s1+s2:v%n1===0?s1:v%n2===0?s2:v)
// };

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");
// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });
