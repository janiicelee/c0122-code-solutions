/* exported union */
/*

input: first array, second array
output: array

- create a new storage by adding the given arrays.
  - since the concat method already creates a new array, so concatenate the second array on the first array.
- loop over the new array
- if there's a duplicate value, remove it from the new array.
- return the new array

*/

function union(first, second) {
  var newArr = first.concat(second);

  for (var i = 0; i < newArr.length; i++) {
    for (var j = i + 1; j < newArr.length; j++) {
      if (newArr[i] === newArr[j]) {
        newArr.splice(j, 1);
      }
    }
  }
  return newArr;
}

// another solution

// function union(first, second) {
//   var merged = first.concat(second);
//   var union = merged.filter((item, pos)=> merged.indexOf(item) === pos);
//   return union;
// }
