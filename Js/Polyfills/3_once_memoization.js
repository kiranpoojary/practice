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
