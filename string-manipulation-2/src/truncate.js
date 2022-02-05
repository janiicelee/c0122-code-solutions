/* exported truncate */
/*

- input: length and string
- output: string with an ellipsis

- create new string for the output.
- cut the string down to at most length and add it to the new string.
- for the rest, add an ellipsis to the new string.

- if the length is bigger than the strings' length, cut it as much as the strings' length only.

*/

function truncate(length, string) {
  var shortStr = '';

  if (length >= string.length) {
    for (var i = 0; i < string.length; i++) {
      shortStr += string[i];
    }
  } else if (length < string.length) {
    for (i = 0; i < length; i++) {
      shortStr += string[i];
    }
  }
  shortStr += '...';
  return shortStr;
}
