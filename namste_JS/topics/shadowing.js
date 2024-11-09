var a = 10
let b = 20
{
    console.log({ a });
    var a = 30
    console.log({ a });
    console.log({ b });   //undefined bcoz hoisted in block scope
    let b = 40
    console.log({ b });
}

console.log({ a, b });      //a=30 shadowing(same ref for GEC and block) ;but b=20 bcoz  b is variable with new ref inside block scope

// shadowing in function

function shadowVar() {
    var m = 10
    if (m > 0) {
        console.log({ m });    //var never create Block scope, in local scope of parent
        var m = 20
        let n = 2               //Creates Block scope with undefine on hoisting
        console.log({ m });
    }
    console.log({ m });
}

function shadowLet() {      //Local
    let m = 10
    if (m > 0) {    //Block
        console.log({ m });
        let m = 20
        console.log({ m });
    }
    console.log({ m });
}

shadowVar()
console.log("************************");
shadowLet()


// illegal shadowing
// in the below code let x added to GEC and var x also tries to add GEC(bcoz var in block scope goes under GEC so variable already declared)
// let x = 1
// {
//     var x = 20

// }