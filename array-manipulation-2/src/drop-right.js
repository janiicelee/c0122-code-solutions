/* exported dropRight */
/*
-input: array, count
-output: array
-create a new storage for the output.
-if the array is empty always return an empty array.
-drop the last 'count' elements in the array.
-only contain the elements til the count number of the array.
-store them in the new storage
*/

function dropRight(array, count) {
  var dropRightArr = [];

  if (array.length === 0) {
    return [];
  }

  for (var i = 0; i < array.length - count; i++) {
    dropRightArr.push(array[i]);
  }

  return dropRightArr;
}
