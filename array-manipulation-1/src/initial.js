/* exported initial */
/*

-input: array
-output: array

- create a new storage for the words.
- put the words inside of the storage except the last one.

*/

function initial(array) {
  var newArr = [];

  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
