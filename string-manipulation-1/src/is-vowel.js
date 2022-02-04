/* exported isVowel */
/*

input: string
output: boolean

- if the character is a vowel, return true
  - make the character all lowercase to handle both uppercase and lowercase options.
  - set a condition to check if the character is a vowel.
  - if it is a vowel, return true.

*/

function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    return true;
  }
  return false;
}
