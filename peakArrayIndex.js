// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.
//
// For example:
//
// peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
// peak([1,12,3,3,6,3,1]) = 2
// peak([10,20,30,40]) = -1
// --For Haskell
// peak [1,12,3,3,6,3,1] == Just 2
// peak [10,20,30,40]  == Nothing
// The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.
//
// More examples in the test cases.
//
// Good luck!
//
// Please also try Simple time difference

function peak(arr){
//loop - through each element
  //current index will be the pivot
for(let i=1; i<arr.length - 1; i++){
  //left = break the arr from index 0 until index where index is not included
    //sum1 = arr.reduce
  let left = arr.slice(0, i).reduce((a,c)=> a+c)
  //right = broken arr from index + 1 until array.length
    //sum2 = arr.reduce
  let right = arr.slice(i+1, arr.length).reduce((a,c)=> a+c)

  //if the left === right
  if(left === right){
    //return current index
      return i
    }
  }
  //return -1
  return -1;
}

// describe("Basic tests", function(){
// Test.assertEquals(peak([1,2,3,5,3,2,1]),3);
// Test.assertEquals(peak([1,12,3,3,6,3,1]),2);
// Test.assertEquals(peak([10,20,30,40]),-1);
// });
