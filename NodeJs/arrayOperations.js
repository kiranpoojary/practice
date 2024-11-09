arr1 = [1, 2, 3, 8, 9, 10]
arr2 = [4, 5, 6, 7]
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
obj = { name: "kiran0", age: 24 }
let obj1 = [{ name: "kiran1", age: 24 }, { name: "appiee2", age: 24 }, { name: "kiran3", age: 24 }]
let obj2 = [{ name: "appiee4", age: 24 }, { name: "kiran5", age: 24 }, { name: "appiee6", age: 24 }]
let newNames = ["kiran", "Appiee"]
console.log("***********merging 2 arry : no order*****************");
console.log("not a clear merge", [...arr1, arr2]);
console.log("clear merge", [...arr1, ...arr2]);

console.log("************remove between index**********");
console.log(arr3.splice(3, 6));


var names = ["Jani", "Hege", "Stale", "Kai Jim", "Borge"]

console.log(names); // Jani,Hege,Stale,Kai Jim,Borge
names.splice(2, 0, ...newNames);
console.log(names); // Jani,Hege,Lene,Stale,Kai Jim,Borge

console.log("************Object clear merge**************");
console.log([obj, ...obj1]);
