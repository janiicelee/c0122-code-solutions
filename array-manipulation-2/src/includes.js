/* exported includes */
/*

- input: array, value
- output: boolean

- look at each item in the array one at a time.
- check if the value is in the given array.
- if the given array is empty, return false always.

*/

function includes(array, value) {

  if (array.length === 0) {
    return false;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
