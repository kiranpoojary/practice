// find minimum distance between 2 array elemnt
// let arr = [6, 4, 6, 4, 2, 3, 7, 8, 9, 6, 7, 5, 4, 3];
// num1: 6 and num2: 2
//Ootput: 2 (diff of index 2 and 4)

let arr = [6, 4, 6, 4, 2, 3, 7, 8, 9, 6, 7, 5, 4, 3];

function getMinElementDistance(arr, num1, num2) {
  let num1Index = -1;
  let num2Index = -1;
  let minDistance = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num1) {
      num1Index = i;
    }
    if (arr[i] == num2) {
      num2Index = i;
    }

    if (num1Index != -1 && num2Index != -1) {
      minDistance = Math.min(minDistance, Math.abs(num1Index - num2Index));
    }
  }
  return minDistance;
}

console.log(getMinElementDistance(arr, 2, 6));
