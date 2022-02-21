/* exported intersection */
/*

input: first array, second array
output: array

- create new storage for the output
- only get the unique element in both arrays.
  - if an element in the second array is not in the first array, don't add it to the new array
  - only add the element that is also in the second array.
- return the new array
*/

function intersection(first, second) {
  var same = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      continue;
    }
    same.push(first[i]);
  }

  return same;
}
