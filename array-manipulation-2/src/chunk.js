/* exported chunk */
/*
- input: array, size
- output: array of sub-arrays
- create a new storage for the output (array of arrays)
- check if the new storage is empty, or the length of the sub array is the given size.
- if it is, create a new sub array with current elements and store them in the new storage.
- if not, get the last subarray and fill it with the current elements.
- return the new storage.
*/

function chunk(array, size) {
  var totalArr = [];

  for (var value of array) {
    var lastArr = totalArr[totalArr.length - 1];
    if (!lastArr || lastArr.length === size) {
      totalArr.push([value]);
    } else {
      lastArr.push(value);
    }
  }
  return totalArr;
}
