/* exported pick */
/*
-input: source(object), keys(array)
-output: object

-create a new storage for the output.
-check if the keys are in the source.
-store the properties with the right key into the new storage

*/

function pick(source, keys) {
  var obj = {};

  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}
