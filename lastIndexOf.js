function lastIndexOf(array, value) {
  let lastPosition = 0;
  if (array !== [] && array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        lastPosition = i;
      }
      if (lastPosition === 0) {
        lastPosition = -1;
      }
    }
  } else if (array.length === 1) {
    lastPosition = 0;
  } else {
    lastPosition = -1;
  }
  return lastPosition;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
