/* exported reverseWords */
/*

input: string
output: string

- reverse the whole string
- split the string by spaces => array
- reverse the array
- concatenate the words with spaces between.

*/

function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
