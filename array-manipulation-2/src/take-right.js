/* exported takeRight */
/*

-input: array, count
-output: array

-create a new storage for the output
-if the array is empty, return an empty array
-take the last element of the given array using the count number
  -subtract the count number from the total length of the given array
-if the count number is bigger than the total length of the array, return the original array
- store it in the new storage

*/

function takeRight(array, count) {
  var rightArr = [];

  if (array.length === 0) {
    return [];
  } else if (count > array.length) {
    return array;
  }

  for (var i = array.length - count; i < array.length; i++) {
    rightArr.push(array[i]);
  }
  return rightArr;

}
