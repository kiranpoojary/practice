Array.prototype.myFlat = function (level = 1) {
  //flat recursive
  function flatMe(arr, maxLevel, currLevel = 1, result = []) {
    for (const element of arr) {
      if (Array.isArray(element) && currLevel <= maxLevel) {
        flatMe(element, maxLevel, currLevel + 1, result);
      } else {
        result.push(element);
      }
    }
    return result;
  }

  return flatMe(this, level);
};

let arr = [1, 2, [3, [4, [5]]]];
console.log(arr.myFlat()); //[ 1, 2, 3, [ 4, [ 5 ] ] ]
console.log(arr.myFlat(2)); //[ 1, 2, 3, 4, [ 5 ] ]
console.log(arr.myFlat(Infinity)); //[ 1, 2, 3, 4, 5 ]

// without recurssion
// Array.prototype.myFlat = function (level = 1) {
//   let result = [];
//   let currArray = this;
//   if (level == Infinity) level = 999;
//   for (let currLevel = 0; currLevel < level; currLevel++) {
//     result = [];
//     for (let ele of currArray) {
//       if (Array.isArray(ele)) {
//         result = [...result, ...ele];
//       } else {
//         result.push(ele);
//       }
//       currArray = result;
//     }
//   }
//   return result;
// };
// console.log(arr.myFlat(Infinity));
