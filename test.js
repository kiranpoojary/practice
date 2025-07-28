const myArray = [1, 3, 4, 6, 7, 9, 10];
const myArrayObj = [
  { name: "aa", age: 17 },
  { name: "bb", age: 24 },
  { name: "cc", age: 37 },
];
const nestedArray = [
  1,
  2,
  [3, 4, [5, 6, [7, [7.4, 7.6]], 8], [9, 10, 11], 12],
  13,
];
//
//
// map
// console.log(myArray.map((value, index, arr) => value * 2));
//
// Array.prototype.myMap = function (cbFn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     const ele = this[i];
//     result.push(cbFn(ele, i, this));
//   }
//   return result;
// };
// console.log(myArray.myMap((e, i, arr) => e * 2));
//
//
//
//
// filter
//
// console.log(myArray.filter((e, i, arr) => e % 2 == 0));
//
// Array.prototype.myFilter = function (cbFn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     const ele = this[i];
//     if (cbFn(ele, i, this)) result.push(ele);
//   }
//   return result;
// };
// console.log(myArray.myFilter((ele) => ele % 2 == 0));
//
// reduce
//
// console.log(
//   myArray.reduce((res, cur, i, arr) => {
//     console.log({ i, tt: arr });

//     return res + cur;
//   }, 0)
// );
//
// Array.prototype.myReduce = function (cbFn, init) {
//   let result = init;
//   for (let i = 0; i < this.length; i++) {
//     const ele = this[i];
//     result = cbFn(result, ele, i, this);
//   }
//   return result;
// };
// console.log(
//   myArray.myReduce((res, cur) => {
//     res = res + cur;
//     return res;
//   }, 0)
// );
//
// flat
//
// console.log(nestedArray.flat()); //default 1
// console.log(nestedArray.flat(2));
// console.log(nestedArray.flat(Infinity));
//
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
// console.log(nestedArray.myFlat(Infinity));
//
// once
// function once(fn) {
//   let called = false;
//   let result;
//   return function () {
//     if (!called) {
//       result = fn(...arguments);
//       called = true;
//       return result;
//     } else {
//       return result;
//     }
//   };
// }

// function greet(name) {
//   return `Hi ${name}`;
// }

// const greetOnce = once(greet);

// console.log(greetOnce("Ekta"));
// console.log(greetOnce("Kiran"));
// console.log(greetOnce("Nitya"));
//
//
//
//
// memoization
//

async function processing(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function memoize(fn) {
  let cache = {};
  return async function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = await fn(...arguments);
      cache[key] = result;
      return cache[key];
    }
  };
}

async function getUserData(uid) {
  console.log(`processing: ${uid}.........`);
  await processing(2000);
  return { uid };
}
const memoGetuserData = memoize(getUserData);

async function global() {
  console.log(await memoGetuserData(123));
  console.log(await memoGetuserData(123));
  console.log(await memoGetuserData(123));
  console.log(await memoGetuserData(124));
  console.log(await memoGetuserData(124));
  console.log(await memoGetuserData(124));
}

global();

//
//
//
// debouncing
//
//
//
//
// throttling
//
//
//
//
// call
//
//
//
//
// apply
//
//
//
//
// bind
//
//
//
//
// promise
//
//
//
//
//
