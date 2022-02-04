/* exported reverse */
/*

-input: array
-output: array

- create a new storage for the words
- put the words inside of the storage in a reversed order.

*/

function reverse(array) {
  var newArr = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
