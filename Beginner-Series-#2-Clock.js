// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to milliseconds.
//
// Example:
// past(0, 1, 1) == 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s){
  //3600000 ms/ per hour
  //60000 ms/minute
  //1000 ms/second
  return (h*3600000)+(m*60000)+(s*1000)
}

//One liner
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

// Test.describe("Fixed Tests", _ => {
//   Test.it("Tests", __ => {
//     Test.assertEquals(past(0,1,1),61000)
//     Test.assertEquals(past(1,1,1),3661000)
//     Test.assertEquals(past(0,0,0),0)
//     Test.assertEquals(past(1,0,1),3601000)
//     Test.assertEquals(past(1,0,0),3600000)
//   });
// });
