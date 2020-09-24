// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  //take the numbers and join them because they are separated
  let num = numbers.join('') //this way they will be join together
  //divide them into group of sections
  let firstPart = num.slice(0,3)
  let secondPart = num.slice(3,6)
  let thirdPart = num.slice(6, 10)
  // 1st group - (3 numbers )
  // 2nd - 3 numbers + "-"
  //3rd - 4 numbers
  return '(' + firstPart + ') ' + secondPart + '-' + thirdPart
}

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') '
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }

// describe('Basic tests', () => {
//   Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//   Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
//   Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// });
