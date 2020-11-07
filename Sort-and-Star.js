// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.

function twoSort(s) {
  //vector (array) of string - with uppercase or lowercase
  //break that vector into individuals
  //sort the array, I'm going to take the first element out of the array, break it
  //and then I'm going to take the first element and break it so I can add *** after every letter except last one
//ASCII - lower case and upper case values different; for ambiguity

  let sorted = s.sort()
  let firstElement = sorted.shift()
  const brokenElement = firstElement.split('')
  const newArray = brokenElement.map(element => element + '***' ).join('')
  //challenge - taking out the *** of the last letter or character
  let finalString = newArray.substring(0, newArray.length -3)
  return finalString
}

//One liner
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}


// Test.describe("Basic tests",_=>{
// Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
// });
