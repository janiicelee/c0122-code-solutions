/* exported defaults */
/*

- input: target(object), source(object)
- output: object

- add the property of the source object to the target object that is not in the target object
- check if the property of source is in the target object.
- if not, update the target object with the key of source.
*/

function defaults(target, source) {

  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
