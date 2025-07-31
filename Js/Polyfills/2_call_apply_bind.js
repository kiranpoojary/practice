// Please understand what is the use of call, bind, apply with below explanation
// Explanation Start
// 1. call()
// The call() method invokes a function immediately with a specified this value and arguments.

// Syntax:
// functionName.call(thisArg, arg1, arg2, ...)
// thisArg: The value you want this to refer to inside the function.
// arg1, arg2, ...: Arguments passed individually.

// Example:
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = { name: "Alice" };
// greet.call(person, "Hello", "!"); // Output: "Hello, Alice!"
// Here, greet is called immediately with person as this, and "Hello" and "!" are passed as arguments.

// 2. apply()
// The apply() method is similar to call(), but instead of passing arguments individually, you pass them as an array.

// Syntax:
// functionName.apply(thisArg, [arg1, arg2, ...])
// thisArg: The value you want this to refer to inside the function.
// [arg1, arg2, ...]: Arguments passed as an array.

// Example:
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = { name: "Alice" };
// greet.apply(person, ["Hi", "!"]); // Output: "Hi, Alice!"
// In this case, apply is useful when you already have arguments in an array format, as it passes them directly without needing to unpack them.

// 3. bind()
// The bind() method creates a new function that, when called, has a specified this value and optionally prepends arguments to the function. Unlike call and apply, it doesn’t invoke the function immediately; instead, it returns a new function with the specified this context bound.

// Syntax:
// const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
// thisArg: The value you want this to refer to inside the function.
// arg1, arg2, ...: Arguments that will be prepended when the new function is called.

// Example:
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = { name: "Alice" };
// const boundGreet = greet.bind(person, "Hey");
// boundGreet("!"); // Output: "Hey, Alice!"
// Here, bind creates a new function boundGreet with this set to person and "Hey" pre-filled as the first argument. When boundGreet is called, the additional argument "!" is appended.

// Summary
// call: Invokes the function immediately with this and arguments specified individually.
// apply: Invokes the function immediately with this and arguments passed as an array.
// bind: Returns a new function with a bound this context and optionally pre-filled arguments, but doesn’t invoke it immediately.

// Explanation End
// NOTE: Don't use arrow function for protype function bcoz "this" not available inside arrow function

console.log(
  "\n***********************************************************************************************"
);
// with CALL
// call-immidiate calling
const person = {
  name: "Ekta",
  age: 37,
};

function getPersonDetails(uid) {
  console.log("Sl. No.   :", uid);
  console.log("Full Name :", this.name);
  console.log("Age       :", this.age);
}

// getPersonDetails.call(person, "1");

Function.prototype.myCall = function (customThis = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  if (
    customThis === null ||
    typeof customThis !== "object" ||
    Array.isArray(customThis)
  ) {
    customThis = {};
  }
  customThis.fn = this;
  customThis.fn(...args);
};

getPersonDetails.myCall(person, "1");
console.log("\n-----------myApply----------");
const person2 = {
  name: "Ekta",
  age: 37,
};

function getPersonDetails(sl, reg) {
  console.log("Sl. No.   :", sl);
  console.log("Reg. No.  :", reg);
  console.log("Full Name :", this.name);
  console.log("Age       :", this.age);
}

// getPersonDetails.apply(person, [1, 2]);

Function.prototype.myApply = function (customThis = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  if (
    customThis === null ||
    typeof customThis !== "object" ||
    Array.isArray(customThis)
  ) {
    customThis = {};
  }

  if (!Array.isArray(args)) args = [];
  customThis.fn = this;
  customThis.fn(...args);
};

getPersonDetails.myApply(person2, [1, 2]);

console.log("\n-----------myBind----------");

// bind - return function
const person3 = {
  name: "Ekta",
  age: 37,
};

function getPersonDetails(sl, reg, wish) {
  console.log("Sl. No.   :", sl);
  console.log("Reg. No.  :", reg);
  console.log("Full Name :", this.name);
  console.log("Age       :", this.age);
  console.log("Wish      :", wish);
}

// const bindedFn = getPersonDetails.bind(person, 101, 202);
// bindedFn("Bye");
Function.prototype.myBind = function (customThis = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  if (
    customThis === null ||
    typeof customThis !== "object" ||
    Array.isArray(customThis)
  ) {
    customThis = {};
  }

  customThis.fn = this;
  return function () {
    return customThis.fn(...args, ...arguments);
  };
};

const bindedFn = getPersonDetails.myBind(person3, 101, 202);
bindedFn("Hi");

console.log(
  "\n***********************************************************************************************"
);
