var val3 = 1
let ans = MyFun()
console.log({ ans });


function MyFun(val = 100) {
    let val2 = 200
    var val3 = 500
    if (val > 0)
        var answer = val + val2 + val3
    return answer

    // {
    //     let answer = val + val2 + val3
    //     return answer
    // } else {
    //     return 0
    // }

}

let dummy = 100