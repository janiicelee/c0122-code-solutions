/* exported take */
/*
- input: array, count
- output: array
- create a new storage for the output.
- if the input is empty, return an empty array.
- look at the items one at a time until the count number.
- store them in the new storage.
*/

function take(array, count) {
  var takeArr = [];

  if (array.length === 0) {
    return [];
  }

  for (var i = 0; i < count; i++) {
    takeArr.push(array[i]);
  }
  return takeArr;
}
