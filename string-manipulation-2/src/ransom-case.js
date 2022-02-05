/* exported ransomCase */
/*

- input: string
- output: string

- create a storage for the output
- make the second, fourth, sixth... letter be uppercased.
- store it in the new storage.

*/

function ransomCase(string) {
  var newStr = '';
  var low = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += low[i];
    } else {
      newStr += low[i].toUpperCase();
    }

  }
  return newStr;
}
