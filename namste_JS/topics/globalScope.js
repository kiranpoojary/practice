var a = 10      //under Global
let b = 50      //under Script
const c = 100   //under Script

console.log({ a, b, c });
//under Global
function MyFun(val = 200) {
    return val

}

//under Global
var MyVarFun = (val = 200) => {
    return val
}

//under Script
let MyLetFun = (val = 200) => {
    return val

}

var a = 11          //under Global
// let b = 51      //already declared
// const c = 101     //already declared

console.log({ a, b, c });

console.log(MyFun());
console.log(MyVarFun(111));
var MyVarFun = (val = 200) => {
    return val + 3
}

console.log(MyVarFun(111));
console.log(MyLetFun(222));




