/* exported isPalindromic */
/*

input: string
output: boolean

- create a storage
- put the letters in a reverse order and store them in the storage
- compare if the storage and the given string is identical
- remove spaces in string to compare easily

*/

function isPalindromic(string) {
  string = string.split(' ').join('');
  var reverseString = '';

  for (var i = string.length - 1; i >= 0; i--) {

    reverseString += string[i];

  }
  return reverseString === string;
}
