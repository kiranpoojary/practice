function findLargestElement(nestedArray, largest) {
  if (nestedArray.length == 0) return largest;
  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      largest = findLargestElement(element, largest);
    } else if (!largest) {
      largest = element;
    } else if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

let arr = [4, 6, 3, [25, 1, [8], 10], 7];
let arr2 = [
  [10, 20],
  [399, 44],
];
let arr3 = [[0], [0]];
let arr4 = [];

console.log(findLargestElement(arr));
console.log(findLargestElement(arr2));
console.log(findLargestElement(arr3));
console.log(findLargestElement(arr4));
