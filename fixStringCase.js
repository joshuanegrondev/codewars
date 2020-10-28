// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!
//
// Please also try:
//
// Simple time difference
//
// Simple remove duplicates

function solve(s){
  //string -> array
 let array = s.split('')
  //filter by upperCase
 let upperCaseArray = array.filter(letter => letter === letter.toUpperCase())
 //filter by lowerCase
 let lowerCaseArray = array.filter(letter => letter === letter.toLowerCase())
 console.log(upperCaseArray,lowerCaseArray)
  //if (array has more upperCase).join()
        //string.toUpperCase
  //if (String has more lowerCase)
        //string.toLowerCase
  if(upperCaseArray.length !== lowerCaseArray.length && upperCaseArray.length > lowerCaseArray.length){
    return s.toUpperCase()
  } else {
    return s.toLowerCase()
  }
}

// describe("Basic tests", function(){
// Test.assertEquals(solve("code"),"code");
// Test.assertEquals(solve("CODe"),"CODE");
// Test.assertEquals(solve("COde"),"code");
// Test.assertEquals(solve("Code"),"code");
// });
