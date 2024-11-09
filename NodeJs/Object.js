let ob1 = { name: "kiran", age: 24 }
let ob2 = { name: "appiie", age: 24 }
let ob3 = { name: "appiie", age: 24 }
let ob4 = { fullname: "kiran", age: 24 }

console.log(ob1 === ob1);
console.log(ob1 == ob1);
console.log(Object.is(ob1, ob1));
let obCopy2 = ob2
console.log(Object.is(obCopy2, ob2));
console.log(ob2 === ob3);
console.log(ob2 == ob3);
console.log(Object.is(ob2, ob3));

console.log(JSON.stringify(ob1) === JSON.stringify(ob2));
console.log(JSON.stringify(ob2) === JSON.stringify(ob3));