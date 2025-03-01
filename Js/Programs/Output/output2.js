function greet() {
  let name = "Kiran";
  return function () {
    console.log("Hello " + name);
  };
}

greet()();
let g = greet();
g();

// (function name() {
//   console.log(3000);
// })();

// name();
