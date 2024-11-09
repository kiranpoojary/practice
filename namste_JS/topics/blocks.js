let a = 10
var b = 20
const f = 70
// Block > never creates new ExCont its executes in GEC(stack)
{
    let a = 30
    let b = 40
    let c = 50
    console.log({ a, b, c });
    {
        var d = 60
        let e = 70
        console.log({ a, b, c, d, e, f });
    }
}

console.log({ a, b, f });