// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.

function getAverage(marks){
  //add all scores
  let total = 0;
  marks.forEach((marks) => total += marks)
  //divide by total numbers of scores
  let average = total/marks.length
  //round
  return Math.floor(average)
}

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
