// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// solution("camelCasing")  ==  "camel Casing"

// complete the function
function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach( letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}

// function solution(string){
//   return string.replace(/[A-Z]/g, function(c){return " " + c;});
// }

// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
