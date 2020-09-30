// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
//
// In Racket, the function is called palindrome?
//
// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t


function isPalindrome(x) {
 let reversed = x.split("").reverse().join("")
 if(reversed.toLowerCase() == x.toLowerCase()){
   return true
 } else {
   return false
 }
}

// one liner
// const isPalindrome = (x) => {
//   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }



// const { assert } = require('chai');
//
// describe("Fixed tests", function() {
//   it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});
