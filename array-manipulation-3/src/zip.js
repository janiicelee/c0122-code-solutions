/* exported zip */
/*

input: first array, second array
output: array of arrays

- make a new storage for the output. => empty list
- assume the given arrays have different lengths, get the minimum length of both arrays.
- make a for loop to get each element out of the array
- match each item in an array and put it in the new storage => assign it to the empty list.

*/

function zip(first, second) {
  var zipped = [];
  var len = Math.min(first.length, second.length);

  for (var i = 0; i < len; ++i) {
    zipped[i] = [first[i], second[i]];
  }
  return zipped;
}
