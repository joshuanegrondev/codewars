// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"

function position(letter){
  const alphabet = '-abcdefghijklmnopqrstuvwxyz'.split('')
   //look for the index of letter in alphabet
  const index = alphabet.indexOf(letter)
  console.log(index)
  //return indexof letter + 1
  return `Position of alphabet: ${index}`
}

//using charCodeAt

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}


Test.assertEquals(position("a"),"Position of alphabet: 1");
Test.assertEquals(position("z"),"Position of alphabet: 26");
Test.assertEquals(position("e"),"Position of alphabet: 5");
