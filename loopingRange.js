const range = function (start, end, step) {
  let numberList = [];
  if (
    start !== undefined &&
    end !== undefined &&
    step !== undefined &&
    step >= 0
  ) {
    numberList.push(start);
    while (start < end) {
      start += step;
      numberList.push(start);
    }
  }
  if (start > end) {
    numberList = [];
  }
  return numberList;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(5, 2, 3));
