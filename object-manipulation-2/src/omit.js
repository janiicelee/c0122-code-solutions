/* exported omit */
/*

input: source(object), keys(array)
output: object

- create a new storage
- if the key in source are included in the keys array add them to the new storage
- if the value is undefined, don't add them
- return the new storage

*/

function omit(source, keys) {
  var obj = {};

  for (var key in source) {
    if (!keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}
