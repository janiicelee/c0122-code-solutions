function reduce(array, reducer, initialValue) {
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    initialValue = reducer(initialValue, curr);
  }
  return initialValue;
}
