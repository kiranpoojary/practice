const arr = [5, 4, 6, 8, 9, 3]

//find sum
console.log("*********SUM************");
var allSum = arr.reduce((sum, ele) => {
    sum = sum + ele
    return sum
}, 0)
console.log(allSum);

//find max
console.log("*********MAX************");
var maxNum = arr.reduce((max, ele) => {
    if (ele > max)
        max = ele
    return max
}, arr[0])
console.log(maxNum);


const users = [
    { fName: "Kiran", lName: "Poojary", age: 24 },
    { fName: "Rahul", lName: "Ragav", age: 45 },
    { fName: "Appiee", lName: "Panda", age: 24 },
    { fName: "raja", lName: "Ram", age: 65 }
]
console.log("\n*****Find {age:count,...} *******");
const ageCount = users.reduce((result, u) => {
    if (result[u.age]) {
        result[u.age] = ++result[u.age]
    } else {
        result[u.age] = 1;
    }

    return result
}, {})
console.log(ageCount);

//first name of user age<30
console.log("\n*****fname age<30*******");
const ageLess30 = users.reduce((result, u) => {
    if (u.age < 30)
        result.push(u.fName)
    return result
}, [])
console.log(ageLess30);



var sample = [1, 2, 3] // here we meet again
// es6
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)


