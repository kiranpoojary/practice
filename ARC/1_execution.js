var a = 10;

function getA() {
  console.log(a);
  var a = 100;
  console.log(a);
}

console.log(a);
getA();
console.log(a);

// var a = 10;

// function getSq(n) {
//   var a = n ** 2;
//   return a;
// }

// var aSq1 = getSq(a);
// var aSq2 = getSq(10);

// console.log("end");
