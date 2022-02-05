/* exported lastChars */
/*

- input: length, string
- output: last length characters of string

- create a new storage for the output
- if the length is bigger than the strings' length, cut it as much as the strings' length only.

*/

function lastChars(length, string) {
  var lastStr = '';

  if (length <= string.length) {
    for (var i = string.length - length; i < string.length; i++) {
      lastStr += string[i];
    }
  } else {
    return string;
  }
  return lastStr;
}
