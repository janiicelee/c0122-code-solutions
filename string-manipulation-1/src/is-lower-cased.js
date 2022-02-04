/* exported isLowerCased */

/*

input: string
output: boolean

- if the letters are all lowercased, return true
- if one or more letters are uppercased, return false
  - make all letters lowercased and when it matches the input return true.

*/

function isLowerCased(word) {
  var lowerCasedWord = word.toLowerCase();

  if (lowerCasedWord === word) {
    return true;
  }
  return false;
}
