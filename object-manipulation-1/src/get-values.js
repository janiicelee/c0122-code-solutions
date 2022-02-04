/* exported getValues */
/*

- input: object
- output: array

- create a storage to keep the values of the object
- look at each value in the object
- store the values in the new storage.
*/

function getValues(object) {
  var newArr = [];

  for (var key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
