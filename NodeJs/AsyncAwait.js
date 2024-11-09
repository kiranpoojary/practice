const axios = require('axios')

//Direct call
function normalCall(params) {
    try {
        let data = axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log("normal call data is ", data);
        console.log("normal call ended...");
    } catch (error) {
        console.log(error);
    }

}
// normalCall()


//Async Await
async function asyncAwaitCall(params) {
    try {
        let apiData = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log("await call data is ", apiData.data);
        console.log("await call ended...");
    } catch (error) {
        console.log(error);
    }
}
// asyncAwaitCall()


//.then
function thenCall(params) {
    try {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => {
                console.log(".then call data is", res.data);
                console.log(".then call ended...");
            })
    } catch (error) {
        console.log(error);
    }
}
// thenCall()


function notExpectedFun() {
    let ar = [6, 4, 5, 1, 2, 3]
    console.log("Expected output must in order ", ar);
    console.log("Output is");
    ar.map(e => {
        setTimeout(() => {
            console.log(e);
        }, e * 500);
    })
}
// notExpectedFun()


// const getData2 = async (list) => {
//     Promise.all(list.map((item, i) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("resolved ", i);
//                 resolve(item)
//             }, 500 * item);
//         })
//     })).then(res => {
//         console.log(res);
//     })
// }


// getData2([6, 4, 5, 1, 2, 3])

let wait = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, t * 100);
    })
}

// const arr = [4, 3, 1, 2, 3];

// const res = async () => arr.reduce(async (memo, v) => {
//     const results = memo;
//     console.log(`S ${v}`)
//     await wait(v)
//     console.log(`F ${v}`);
//     return [...results, v + 1];
// }, []);

// res()


const APISimulator = (v) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: v });
    }, v * 100);
});

const arr = [7, 6, 5, 1, 2, 3];

const res = () => arr.reduce(async (memo, v, i) => {
    const results = await memo;
    console.log(`proccessing item-${i + 1} :`, v)
    await APISimulator(v);
    console.log(`completed proccessing-${i + 1} :`, v)
    return [...results, v];
}, []);

res().then(proccessed => console.log(proccessed))