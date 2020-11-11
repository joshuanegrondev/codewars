// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// ##Examples :
//
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

//split numbers
//create array for even
//create array of odd
//for loop
//parseInt
  //if the number is even -> push to evenArray
  //else -> push to oddArray
//if evenArray.length > oddArray.length
  //return the position of only element in oddArray converted to string
//else
  //return the position only element in evenArray converted to string

function iqTest(numbers){
 const numArr = numbers.split(' ')
 let even = []
 let odd = []
 for (let i=0; i<numArr.length; i++){
   let parsed = numArr[i]
   if(parsed % 2 === 0){
     even.push(parsed)
   } else {
     odd.push(parsed)
   }
 }
  if(even.length > odd.length){
    return numArr.indexOf(odd[0].toString()) + 1
  } else {
    return numArr.indexOf(even[0].toString()) + 1
  }
}

// function iqTest(numbers){
//   var nums = numbers.split(" ").map(x => x % 2);
//   var sum = nums.reduce((a,b) => a + b);
//   var target = sum > 1 ? 0 : 1;
//
//   return nums.indexOf(target) + 1;
// }

// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);
