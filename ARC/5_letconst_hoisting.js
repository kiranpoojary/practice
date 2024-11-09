// console.log({ a });
let a;
a = 100;
console.log(a);

let b;
console.log({ b });

function a_letConstHoist() {
  let a;
  console.log({ a });
}

a_letConstHoist();

//let and const are hoisted but not accessible unless its assigned value
//let and const in global scope goes under script scope not under global scope
