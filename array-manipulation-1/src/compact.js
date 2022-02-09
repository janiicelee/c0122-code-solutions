/* exported compact */
/*

-input: array
-output: array

- remove falsy values of the input
  - create new storage for the output
  - look on each item one at a time
  - check if there's a falsy value in the input.
  - if it's not a falsy value, put the elements in the new storage.
  - return the new storage.

*/

function compact(array) {
  var truthyArr = [];

  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
