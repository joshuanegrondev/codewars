// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  var i = 0;
  var strArray = []
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      strArray.push(str[i] + str[i+1]);
      i += 2;
    }
  return strArray
  }


//   var i = 0;
//   var strArray = new Array();
//   if (str.length % 2 && str.length !== 0) {
//     return str = str + '_'; wrong
//   }
//   while (i < str.length) {
//       strArray.push(str[i] + str[i+1]);
//       i += 2;
//     }
//   return strArray
// }

//sample tests:
// const { assert } = require('chai');
//
// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
