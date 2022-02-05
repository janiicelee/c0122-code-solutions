/* exported drop */
/*
- input: array, count
- output: array
- create a new storage for the output
- if the input is empty, return an empty storage
- look at the items in the input one at a time, starting from the given count number
- store them into the new storage
*/

function drop(array, count) {
  var dropArr = [];

  if (array.length === 0) {
    return [];
  }

  for (var i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }

  return dropArr;
}
