/* exported getKeys */
/*

- input: object
- output: array

- create a storage to store the keys of the object.
- look at each key in the object.
- put the keys in the new storage.

*/

function getKeys(object) {
  var newArr = [];

  for (var key in object) {
    newArr.push(key);
  }
  return newArr;
}
