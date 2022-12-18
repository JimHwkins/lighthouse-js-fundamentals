function concat(firstArray, secArray) {
  let array = [];
  for (let i = 0; i < firstArray.length; i++) {
    array.push(firstArray[i]);
  }
  for (let i = 0; i < secArray.length; i++) {
    array.push(secArray[i]);
  }
  return array;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
