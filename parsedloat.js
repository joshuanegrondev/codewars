/*Write function parseF which takes an input and returns a number or null if
conversion is not possible. The input can be one of many different types so
 be aware.*/



function parseF(s) {
  return Number (s);
  if ( s == NaN){
    return null;
  }
}
