// I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)
//
// Task
// You need to implement a function that applies the standard fizz buzz test:
//
// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself
// However, when making the function, you cannot use if (meaning else is also not an option).
//
// Input
// A number will always be provided
// The number provided will always be positive and an integer
// Examples
// 6 should return Fizz
// 10 should return Buzz
// 15 should return FizzBuzz
// 17 should return 17


const fizzBuzz = n => {
  return  (n % 15 == 0) ? "FizzBuzz"
        : (n % 3 == 0) ? "Fizz"
        : (n % 5 == 0) ? "Buzz"
        : n
};

// these tests do not test for if 'if' is used - take that in mind
// Test.describe("Fizz buzz without ifs", () => {
//   Test.assertEquals(fizzBuzz(1), 1);
//   Test.assertEquals(fizzBuzz(3), "Fizz");
//   Test.assertEquals(fizzBuzz(6), "Fizz");
//   Test.assertEquals(fizzBuzz(7), 7);
//   Test.assertEquals(fizzBuzz(10), "Buzz");
//   Test.assertEquals(fizzBuzz(30), "FizzBuzz");
// });
