/* exported difference */
/*

input: first array, second array
output: array

- make a new storage for the output
- loop over each given array
- only add the elements of the first array that are not in the second array.
- only add the elements of the second array that are not in the first array.
- only add the different elements of the each array
- return the new array

*/

function difference(first, second) {
  var diff = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diff.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      diff.push(second[i]);
    }
  }

  return diff;
}

// another solution

// function difference(first, second) {
//   return first.concat(second).filter(item => !first.includes(item) || !second.includes(item));
// }
