/* exported equal */
/*

input: array, array
output: boolean

- if two given arrays are identical return true
- check if one of them has no value
- check the length of both array is different
- compare each index by looking at each item at a time
  - check if one of the item is different, return false

*/

function equal(first, second) {

  if (first === null || second === null) {
    return false;
  }

  if (first.length !== second.length) {
    return false;
  }

  if (first === second) {
    return true;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
