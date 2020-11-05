// https://www.codewars.com/kata/51f2b4448cadf20ed0000386
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url){
  console.log(url, url.split('#')[0] )
  return url.split('#')[0]
}

//one liner
function removeUrlAnchor(url){
  return url.split('#')[0];
}


// Test.assertEquals(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
