/* exported omit */
/*

input: source(object), keys(array)
output: object

*/

// 1

function omit(source, keys) {
  var obj = {};

  for (var name in source) {
    for (var i = 0; i < keys.length; i++) {
      if (name !== keys[i]) {
        obj[name] = source[name];
      }
    }
  }
  return obj;
}

// 2
// function omit(source, keys) {

//   for(var i=0; i<keys.length; i++) {

//       var obj = source.filter(name => source.name !== keys[i]);
//   }
//   return obj;
// }

// 3
// function omit(source, keys) {

//   for(var i=0; i<keys.length; i++) {
//     for(var name in source) {
//       var newObj = Object.keys(source).reduce((obj, name) => {
//         if(name !==keys[i]) { obj[name] = source[name]}
//         return obj
//       }, {})
//     }
//   }

//   return newObj;
// }

// 4
// function omit(source, keys) {
//   var obj = {};

//   for(var name in source) {
//     for(var i=0; i<keys.length; i++) {
//       if(name === keys[i]) {
//         source[name] = undefined;
//       }
//     }
//     if(source[name] !== undefined){
//       obj[name] = source[name];
//     }
//   }

//   return obj;
// }
