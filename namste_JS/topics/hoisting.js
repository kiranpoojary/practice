
function getSquareRoot(n) {
    console.log(sroot);   //logs undefined sroot not in script scope its in local scope
    let sroot = Math.sqrt(n)   //hoisted in Local N_Access before init
    return sroot
}

let b = 25;
let sqrt = getSquareRoot(b)   //hoisted in Script N_Access before init
console.log({ sqrt });


