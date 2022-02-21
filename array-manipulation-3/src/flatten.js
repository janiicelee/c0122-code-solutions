/* exported flatten */
/*

input: array
output: array

- make the input array flatten by one level
- add the item to a new storage for the output.
  - make a new array to add the arguments into it by using the concat method.
    - concat adds 1 or more values to an array, creating a new array as a result.
    - it is able to recognize values if they are an array and add them as individual element values rather than a single array value.
  - make sure to add the elements of the given array
    - use the apply method so that it doesn't add the array itself, instead add the elements inside the array

*/

function flatten(arr) {
  const flatArr = [].concat.apply([], arr);
  return flatArr;
}
