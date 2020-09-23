// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
//
// It has to return a string with the type of triangle.
// For example:
//
// typeOfTriangle(2,2,1) --> "Isosceles"

var typeOfTriangle = function (sideA, sideB, sideC) {
  if ([sideA, sideB, sideC].some(isNaN) || sideA >= sideB + sideC || sideB >= sideA + sideC || sideC >= sideA + sideB){
    return 'Not a valid triangle'
  }
  if (sideA === sideB && sideB === sideC){
    return 'Equilateral'
  }
  if (sideA === sideB || sideA === sideC || sideB === sideC){
    return 'Isosceles'
  } else {
    return 'Scalene'
  }
}

// one liner: var typeOfTriangle=(a,b,c)=> [a,b,c].filter(x=>typeof x =='number').length!=3||a+b<=c||a+c<=b||b+c<=a ? "Not a valid triangle" : a==b&&b==c ? "Equilateral" : a==b||a==c||b==c ? "Isosceles" : "Scalene";


// Test.describe('typeOfTriangle', function() {
//
//   it('takes a 1, 1, 1, and returns "Equilateral"', function() {
//     Test.assertEquals(typeOfTriangle(1,1,1), "Equilateral");
//   });
//
//   it('takes a 3, 2, 4, and returns "Scalene"', function() {
//     Test.assertEquals(typeOfTriangle(3,2,4), "Scalene");
//   });
//
//   it('takes a 2, 2, 1, and returns "Isosceles"', function() {
//     Test.assertEquals(typeOfTriangle(2,2,1), "Isosceles");
//   });
//
//   it('takes a ".", 5, 82, and returns "Not a valid triangle"', function() {
//     Test.assertEquals(typeOfTriangle('.',5,82), "Not a valid triangle");
//   });
//
// });
