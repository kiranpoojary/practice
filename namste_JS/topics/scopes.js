var a = 10
let sq = 3
const age = 20

function square(n) {
    var sq = n * n
    console.log(a);
    var a = 123
    console.log(a);
    return sq
}

function double(n) {
    var dub = 2 * n
    return dub
}

console.log(square(sq));
console.log(double(20));
console.log({ a });
console.log({ sq });
console.log({ age });