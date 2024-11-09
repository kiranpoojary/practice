const arr = [5, 4, 6, 8, 3, 9]

let names = [{ name: "kiran", age: 24 }, { name: "sharth", age: 25 }, { name: "rigin", age: 26 }]

let p = names.filter(name => name.age == 25)[0].age
console.log("Age filtered ", p);
//find odd
console.log("******ODD*******");
function isOdd(n) {
    return n % 2   // returns 1/0(t/f)
}

const output1 = arr.filter(isOdd)
console.log(output1);

//find even
console.log("******EVEN*******");
const output2 = arr.filter((ele) => ele % 2 == 0)
console.log(output2);

//find <5
console.log("******<5*******");
const output3 = arr.filter(ele => ele < 5)
console.log(output3);



const users = [
    { fName: "Kiran", lName: "Poojary", age: 24 },
    { fName: "Rahul", lName: "Ragav", age: 45 },
    { fName: "Appiee", lName: "Panda", age: 22 },
    { fName: "raja", lName: "Ram", age: 65 }
]
//array of fname with age <30
console.log("\n*****age<30*******");
const less30 = users.filter(u => u.age < 30).map(selectedUser => selectedUser.fName)
console.log(less30);


