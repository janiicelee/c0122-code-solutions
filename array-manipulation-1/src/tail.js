/* exported tail */

/*

-input: array
-output: array

- new list of words except for the first element of the input
  - create a storage to put the words inside.
  - store the words starting from the second position.

*/

function tail(array) {
  var newArr = [];

  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
