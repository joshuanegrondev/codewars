// https://www.codewars.com/kata/546f922b54af40e1e90001da
// Welcome.
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  //create an empty array - numArray
  //lower case text
  //create an alphabet array
  //loop through each element
    //find the element's position in my alphabet array + 1
      //push all the elements that are NOT 0 into my empty array
      //return empty array converted to string - numArray
  const numArray = []
  const lowerText = text.toLowerCase()
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for(let i=0; i<lowerText.length; i++){
    let index = alphabetArray.indexOf(lowerText[i]) + 1
    if(index !== 0){
      numArray.push(index)
    }
  }
  return numArray.join(' ')
}


// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
