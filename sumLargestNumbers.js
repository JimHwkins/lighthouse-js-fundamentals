const sumLargestNumbers = function(data) {
  let largest = data[0]
  let secondLargest = data[0];
  let sum = 0;
  
if (data.length > 1) {
  for (const number of data) {
    if (number > largest){
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest) {
      secondLargest = number;
    }
  }
  } else {
    return undefined;
  }
  sum = secondLargest + largest;
  return sum;  
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));