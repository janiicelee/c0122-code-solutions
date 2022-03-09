/* exported flatten */
/*

input: array
output: array

- make a new storage for the output.
- loop over the given array
- make a variable for each item in the array (it can be an array or just a single element)
- if the item is not an array, put in into the new storage
- if the item is an array, loop over that array and put the item into the new storage
- return the new storage

*/

function flatten(arr) {
  var flat = [];

  for (var i = 0; i < arr.length; i++) {
    var currentItem = arr[i];

    if (!Array.isArray(currentItem)) {
      flat.push(currentItem);
    } else {
      for (var j = 0; j < currentItem.length; j++) {
        flat.push(currentItem[j]);
      }
    }
  }
  return flat;
}
