https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

// We need a function that can transform a number into a string.
//
// What ways of achieving this do you know?
//
// Examples:
// numberToString(123); // returns '123';`
// numberToString(999); // returns '999';`

function numberToString(num) {
  // use method
  return num.toString();

}

function numberToString(num) {
  return String(num);
}

const numberToString = num => '' + num;

Test.assertEquals(numberToString(67), '67');
