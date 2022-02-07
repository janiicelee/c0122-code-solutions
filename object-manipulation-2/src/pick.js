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

  for (var i = 0; i < keys.length; i++) {
    for (var name in source) {
      if (name === keys[i] && source[name] !== undefined) {
        obj[name] = source[name];
      }
    }
  }
  return obj;
}
