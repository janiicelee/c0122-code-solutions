/* exported reverseWord */
/*

input: string
output: string

-return the input in a reversed order
  - create a new string to store letters
  - starting from the end, put the letters in the storage in order.

*/

function reverseWord(word) {
  var reversed = '';

  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
