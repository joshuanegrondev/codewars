https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 //You got this!
  //return sliced array
    //start from the second letter until the last one (.length -1)
 return str.slice(1, str.length - 1)
};

//one liner without using str.length and using ES6
const removeChar = str => str.slice(1, -1);


Test.describe("Tests", function(){

Test.assertEquals(removeChar('eloquent'), 'loquen');
Test.assertEquals(removeChar('country'), 'ountr');
Test.assertEquals(removeChar('person'), 'erso');
Test.assertEquals(removeChar('place'), 'lac');

});
