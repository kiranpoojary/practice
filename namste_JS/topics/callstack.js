
var a = 10      //hoisted in GEC
const x = 121     //hoisted in Script

function getSquare(n) {
    let ans = n * n;
    return ans
}

function getSquareRoot(n) {
    let sroot = Math.sqrt(n)   //hoisted in Local N_Access before init
    return sroot
}

let b = 25;      //hoisted in Script N_Access before init
var square = getSquare(a)
console.log({ square });
let sqrt = getSquareRoot(b)   //hoisted in Script N_Access before init
console.log({ sqrt });
