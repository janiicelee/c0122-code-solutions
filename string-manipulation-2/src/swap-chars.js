/* exported swapChars */
/*

- input: firstIndex, secondIndex, string
- output: string

- create a new storage for the output.
- look at each letter one at a time
- replace two letters at the given index
*/

function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split('');

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = string[firstIndex];

  return arr.join('');
}
