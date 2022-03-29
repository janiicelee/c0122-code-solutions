function map(array, transform) {
  const mapArr = [];
  for (let i = 0; i < array.length; i++) {
    mapArr.push(transform(array[i]));
  }
  return mapArr;
}
