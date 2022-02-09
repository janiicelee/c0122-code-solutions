/* exported includesSeven */
function includesSeven(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      arr.push(array[i]);
    }
  }

  if (arr.length > 0) {
    return true;
  } else {
    return false;
  }

}
