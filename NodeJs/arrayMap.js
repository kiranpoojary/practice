const arr = [5, 4, 6, 8, 3, 9]

//doubled

function duble(num) {
    return num * 2;
}
console.log("*****MAP DOUBLING*******");
const output1 = arr.map(duble)
console.log(output1);
const output2 = arr.map(ele => ele * 2)
console.log(output2);
const output3 = arr.map(function duble(num) {
    return num * 2;
})
console.log(output3);



const users = [
    { fName: "Kiran", lName: "Poojary", age: 24 },
    { fName: "Rahul", lName: "Ragav", age: 45 },
    { fName: "Appiee", lName: "Panda", age: 22 },
    { fName: "raja", lName: "Ram", age: 65 }
]
//create fullname array
console.log("\n*****MAP Full Name*******");
const fullName = users.map(u => u.fName + " " + u.lName)
console.log(fullName);


//array of fname with age <30
console.log("\n*****age<30*******");
const less30Bool = users.filter(u => u.age < 30)
console.log(less30Bool);
//we need to use both filter and map(but we can done this only with redue see arrayReducer.js file)
const less30 = users.filter(u => u.age < 30).map(selectedUser => selectedUser.fName)
console.log(less30);



