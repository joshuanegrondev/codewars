// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
 let arrayOfZero = arr.filter(element => element === 0)
 return arr.filter(element => element !== 0).concat(arrayOfZero)
}

// Test.assertEquals(
//   JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//   JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
// );
