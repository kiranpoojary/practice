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

// async function processing(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function memoize(fn) {
//   let cache = {};
//   return async function () {
//     const key = JSON.stringify(arguments);
//     if (cache[key]) {
//       return cache[key];
//     } else {
//       const result = await fn(...arguments);
//       cache[key] = result;
//       return cache[key];
//     }
//   };
// }

// async function getUserData(uid) {
//   console.log(`processing: ${uid}.........`);
//   await processing(2000);
//   return { uid };
// }
// const memoGetuserData = memoize(getUserData);

// async function global() {
//   console.log(await memoGetuserData(123));
//   console.log(await memoGetuserData(123));
//   console.log(await memoGetuserData(123));
//   console.log(await memoGetuserData(124));
//   console.log(await memoGetuserData(124));
//   console.log(await memoGetuserData(124));
// }

// global();

//
//
//
// debouncing
// Ekta Dewangane
// console.log(
//   "\n************************************** Debouncing *****************************************"
// );
// function debouncer(fn, delay) {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       clearTimeout(timer);
//       return fn(...arguments);
//     }, delay);
//   };
// }

// function searchProduct(searchTxt) {
//   console.log(`searching for: ${searchTxt}`);
// }

// const debouncedSearchProduct = debouncer(searchProduct, 300);
// async function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const str = "SAMSUNG GALEXY NOTE 5 PRO";

// console.log("----------- Search Without Debouncing---------------");
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     await wait(300);
//   } else searchProduct(str.slice(0, i + 1));
// }

// console.log("------------ Search With Debouncing-----------------");

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     await wait(300);
//   } else debouncedSearchProduct(str.slice(0, i + 1));
// }

//
//
//
// throttling
// console.log(
//   "\n************************************** Debouncing *****************************************"
// );
// function throttler(fn, delay) {
//   let lastExecuted = 0;
//   let timeoutId;

//   return function () {
//     const now = Date.now();
//     const remaining = delay - (now - lastExecuted);
//     if (remaining <= 0) {
//       clearTimeout(timeoutId);
//       lastExecuted = now;
//       fn(...arguments);
//     } else {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         lastExecuted = Date.now();
//         fn(...arguments);
//       }, remaining);
//     }
//   };
// }

// function searchProduct(searchTxt) {
//   console.log(`searching for: ${searchTxt}`);
// }

// const throttledProductSearch = throttler(searchProduct, 300);
// async function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const str = "SAMSUNG GALEXY NOTE 5 PRO";

// console.log("----------- Search Without Debouncing---------------");
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     await wait(300);
//   } else searchProduct(str.slice(0, i + 1));
// }

// console.log("------------ Search With Debouncing-----------------");

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     await wait(200);
//   } else throttledProductSearch(str.slice(0, i + 1));
// }

//
//
//
// call-immidiate calling
// const person = {
//   name: "Ekta",
//   age: 37,
// };

// function getPersonDetails(uid) {
//   console.log("Sl. No.   :", uid);
//   console.log("Full Name :", this.name);
//   console.log("Age       :", this.age);
// }

// // getPersonDetails.call(person, "1");

// Function.prototype.myCall = function (customThis = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} is not a function`);
//   }
//   if (
//     customThis === null ||
//     typeof customThis !== "object" ||
//     Array.isArray(customThis)
//   ) {
//     customThis = {};
//   }
//   customThis.fn = this;
//   customThis.fn(...args);
// };

// getPersonDetails.myCall(person, "1");

//
//
//
// apply - immidiate calling
// const person = {
//   name: "Ekta",
//   age: 37,
// };

// function getPersonDetails(sl, reg) {
//   console.log("Sl. No.   :", sl);
//   console.log("Reg. No.  :", reg);
//   console.log("Full Name :", this.name);
//   console.log("Age       :", this.age);
// }

// // getPersonDetails.apply(person, [1, 2]);

// Function.prototype.myApply = function (customThis = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} is not a function`);
//   }
//   if (
//     customThis === null ||
//     typeof customThis !== "object" ||
//     Array.isArray(customThis)
//   ) {
//     customThis = {};
//   }

//   if (!Array.isArray(args)) args = [];
//   customThis.fn = this;
//   customThis.fn(...args);
// };

// getPersonDetails.myApply(null, [1, 2]);
//
//
//
// bind - return function
// const person3 = {
//   name: "Ekta",
//   age: 37,
// };

// function getPersonDetails(sl, reg, wish) {
//   console.log("Sl. No.   :", sl);
//   console.log("Reg. No.  :", reg);
//   console.log("Full Name :", this.name);
//   console.log("Age       :", this.age);
//   console.log("Wish      :", wish);
// }

// // const bindedFn = getPersonDetails.bind(person, 101, 202);
// // bindedFn("Bye");
// Function.prototype.myBind = function (customThis = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} is not a function`);
//   }
//   if (
//     customThis === null ||
//     typeof customThis !== "object" ||
//     Array.isArray(customThis)
//   ) {
//     customThis = {};
//   }

//   customThis.fn = this;
//   return function () {
//     return customThis.fn(...args, ...arguments);
//   };
// };

// const bindedFn = getPersonDetails.myBind(person3, 101, 202);
// bindedFn("Hi");
//
//
//
// promise

// const userData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Ekta", age: 37 });
//     // reject(new Error("500"));
//   }, 2000);
// });
// userData
//   .then((data) => console.log({ data }))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("Finally"));

// function MyPromise(cbFn) {
//   let value;
//   let error;
//   let resolved = false;
//   let rejected = false;
//   let onResolve;
//   let onReject;
//   let onFinally;
//   let called = false;

//   //async
//   function resolve(val) {
//     resolved = true;
//     value = val;
//     if (typeof onResolve == "function" && !called) {
//       called = true;
//       onResolve(value);
//       onFinally();
//     }
//     return this;
//   }

//   function reject(err) {
//     rejected = true;
//     error = err;
//     if (typeof onReject == "function" && !called) {
//       called = true;
//       onReject(error);
//       onFinally();
//     }
//     return this;
//   }

//   //sync
//   this.then = function (thenFn) {
//     onResolve = thenFn;
//     if (resolved && !called) {
//       called = true;
//       onResolve(value);
//     }
//     return this;
//   };

//   this.catch = function (catchFn) {
//     onReject = catchFn;
//     if (rejected && !called) {
//       called = true;
//       onReject(error);
//     }
//     return this;
//   };

//   this.finally = function (finallyFn) {
//     onFinally = finallyFn;
//     if (called) {
//       finallyFn();
//     }
//     return this;
//   };

//   cbFn(resolve, reject);

//   return this;
// }

// const userData = new MyPromise((resolve, reject) => {
//   // setTimeout(() => {
//   resolve({ name: "Ekta", age: 37 });
//   // reject(new Error("500"));
//   // }, 1000);
// });

// userData
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((e) => console.log(e))
//   .finally(() => console.log("Finally"));

function counter(maxCount = 1, currCount = 0) {
  let result = currCount;
  if (currCount < maxCount) {
    const newCount = counter(maxCount, ++currCount);
    result = result < newCount ? newCount : result;
  }
  return result;
}

console.log(counter(5));

function getCount(initCount = 0) {
  let count = initCount;

  return () => {
    return ++count;
  };
}

const nextCount = getCount();
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
console.log(nextCount());
