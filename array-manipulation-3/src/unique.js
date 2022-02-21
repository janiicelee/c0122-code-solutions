/* exported unique */
/*

input: array
output: array

- remove the duplicate elements in the order they first appear.
- create a new storage => new array
- loop over the given array
- store it in the new array.
- if the element in the given array is already added in the new array, don't add it.
- return the new array

*/

function unique(array) {

  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}
