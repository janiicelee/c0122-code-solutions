/* exported isAnagram */
/*

input: two strings
output: boolean

- look at both strings one at a time
- if they have the same letters return true
- if there's space between letters in string, remove them

*/

function isAnagram(firstString, secondString) {

  firstString = firstString.split('').sort().join('').replace(/\s/g, '');
  secondString = secondString.split('').sort().join('').replace(/\s/g, '');

  return firstString === secondString;
}
