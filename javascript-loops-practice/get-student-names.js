/* exported getStudentNames */
function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    for (var name in students[i]) {
      arr.push(students[i][name]);
    }
  }
  return arr;
}
