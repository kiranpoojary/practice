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
console.log("-----------call----------");
let person = {
  name: "Archana",
};

function wish1(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}
wish1("Good Morning", "Bye"); // without call : Good Morning undefined, undefined
wish1.call(person, "Good Morning", "Bye"); // attach custom this context using call : Good Morning Archana, Bye

console.log("\n-----------myCall----------");

Function.prototype.myCall = function (cutomThisContext = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " not a function");
  }
  cutomThisContext.fn = this;
  cutomThisContext.fn(...args);
};

function wish2(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}

wish2("Good Morning", "Bye");
wish2.myCall(person, "Good Morning", "Bye");

console.log(
  "\n***********************************************************************************************"
);

console.log("-----------apply----------");

function wish3(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}
wish3("Good noon", "Bye");
wish3.apply(person, ["Good noon", "Bye"]);

console.log("\n-----------myApply----------");
Function.prototype.myApply = function (cutomThisContext = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error(args + " not an array");
  }
  cutomThisContext.fn = this;
  cutomThisContext.fn(...args);
};

function wish4(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}

wish4("Good noon", "Bye");
wish4.myApply(person, ["Good noon", "Bye"]);

console.log(
  "\n***********************************************************************************************"
);

console.log("-----------bind----------");
function wish5(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}

const wish55 = wish5.bind(person, "Good Evening");
wish55("Bye");

console.log("\n-----------myBind----------");

Function.prototype.myBind = function (cutomThisContext = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " not a function");
  }
  cutomThisContext.fn = this;
  return function (...newArgs) {
    return cutomThisContext.fn(...args, ...newArgs);
  };
};

function wish6(greet, endConv) {
  console.log(`${greet} ${this.name}, ${endConv}`);
}

const wish66 = wish6.myBind(person, "Good Evening");
wish66("Bye");

console.log(
  "\n***********************************************************************************************"
);
