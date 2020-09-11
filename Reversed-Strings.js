// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'

function solution(str){
 let reversed = str.split('').reverse().join('')
 return reversed
}

// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')
