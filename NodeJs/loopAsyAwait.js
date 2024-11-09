// async function someFunction(items) {
//     items.forEach(async (i) => {
//         const res = await someAPICall(i);
//         console.log('--->', res);
//     });
// }
// function someAPICall(param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved" + param)
//         }, param);
//     })
// }
// someFunction(['3000', '8000', '1000', '4000']);





// function testPromise(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Processing ${time}`);
//             resolve(time);
//         }, time);
//     });
// }
// let result = [3000, 2000, 1000, 4000].reduce((accumulatorPromise, nextID) => {
//     return accumulatorPromise.then(() => {
//         return testPromise(nextID);
//     });
// }, Promise.resolve());
// result.then(e => {
//     console.log("All Promises Resolved !!✨")
// });



