//ONCE: make function can invoke once only
//memoize: create cache(return output if already calculated for same input)

console.log(
  "\n************************************** ONCE *****************************************"
);

function sayHello(name) {
  console.log(`Hello ${name}`);
}
console.log("-----------without Once----------");

sayHello("Lakshmi");
sayHello("Archana");
sayHello("Kiran");

function once(yourFunction, context = null) {
  let output;
  return function () {
    if (yourFunction) {
      output = yourFunction.apply(context || this, arguments);
      yourFunction = null;
    }
    return output;
  };
}
console.log("-----------with Once----------");

const sayHelloOnce = once(sayHello);
sayHelloOnce("Lakshmi");
sayHelloOnce("Archana");
sayHelloOnce("Kiran");

console.log(
  "\n************************************ MEMOIZE ***************************************"
);

console.log("-----------without memo/cache----------");

function expensiveFunction(a, b) {
  for (let i = 0; i < 100000000; i++) {
    //
  }
  return a * b;
}

console.time("1");
console.log(expensiveFunction(123, 456));
console.timeEnd("1");

console.time("2");
console.log(expensiveFunction(123, 456));
console.timeEnd("2");

// once way-2
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

console.log("\n-----------with memo/cache----------");
function expensiveFunction2(a, b) {
  for (let i = 0; i < 100000000; i++) {
    //
  }
  return a * b;
}

function memoize(yourFunction, context) {
  let cache = {};
  return function () {
    let input = JSON.stringify(arguments); // arguments is JS inbuild array of args passed
    if (cache[input]) {
      return cache[input];
    } else {
      cache[input] = yourFunction.call(context || this, ...arguments);
    }
    return cache[input];
  };
}

const memoizedExpensiveFunction = memoize(expensiveFunction2);
console.time("3");
console.log(memoizedExpensiveFunction(123, 456));
console.timeEnd("3");

console.time("4");
console.log(memoizedExpensiveFunction(123, 456));
console.timeEnd("4");

//memoize way-2

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
