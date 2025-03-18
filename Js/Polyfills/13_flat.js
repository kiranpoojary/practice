Array.prototype.myFlat = function (
  maxLevel = 1,
  currentLevel = 1,
  result = []
) {
  for (const element of this) {
    if (Array.isArray(element) && currentLevel <= maxLevel) {
      element.myFlat(maxLevel, currentLevel + 1, result);
    } else {
      result.push(element);
    }
  }
  return result;
};

let arr = [1, 2, [3, [4, [5]]]];
console.log(arr.myFlat()); //[ 1, 2, 3, [ 4, [ 5 ] ] ]
console.log(arr.myFlat(2)); //[ 1, 2, 3, 4, [ 5 ] ]
console.log(arr.myFlat(Infinity)); //[ 1, 2, 3, 4, 5 ]
