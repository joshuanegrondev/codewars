// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  //filter the array into positive numbers
  const positiveArr = arr.filter(number => number > 0)
  //add each value
  const sum = positiveArr.reduce((a,c)=> a + c, 0)
  //return the final value
  return sum;
}


// one liner
function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((a,c) => a + c, 0)
}


Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);
