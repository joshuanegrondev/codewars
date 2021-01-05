// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = bool => bool ? 'Yes' : 'No';

Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')
