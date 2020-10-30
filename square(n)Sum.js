// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + Math.pow(num, 2), 0);
}

// first solution
// function squareSum(numbers){
//    let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i] * numbers[i]
//   }
//   return total;
// }
//   return numbers.map(number => Math.pow(number, 2)).reduce((a,c) => a+c) - passed all the test but one; until this day I don't know why

// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
