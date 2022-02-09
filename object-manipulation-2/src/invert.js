/* exported invert */
/*

- input: source(object)
- output: object

- create a new storage for the output
- put the key property as a value
- put the value of property as a key
- return the storage

*/

function invert(source) {
  var obj = {};

  for (var key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
