/* exported firstChars */
/*

- input: length, string
- output: the first length characters of string

- create a new storage for the output.
- if the length is bigger than the strings' length, cut it as much as the strings' length only.

*/

function firstChars(length, string) {
  var firstStr = '';

  if (length <= string.length) {
    for (var i = 0; i < length; i++) {
      firstStr += string[i];
    }
  } else {
    for (i = 0; i < string.length; i++) {
      firstStr += string[i];
    }
  }
  return firstStr;
}
