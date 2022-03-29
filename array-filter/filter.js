function filter(array, predicate) {
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    if (predicate(curr)) {
      filterArr.push(curr);
    }
  }
  return filterArr;
}
