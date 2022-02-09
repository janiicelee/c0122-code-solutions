/* exported isUpperCased */

/*

input: string
output: boolean

- if all letters are uppercased, return true.
- if one or more letters are lowercased, return false.
  - make the letters all uppercased and when it matches with the input, throw true.

*/

function isUpperCased(word) {
  var upperCasedWord = word.toUpperCase();

  if (upperCasedWord === word) {
    return true;
  }
  return false;

}
