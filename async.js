async function MyAPI(url, req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req?.body?.success)
        resolve({ data: { ...req?.body, list: [] }, statusCode: 200 });
      else
        reject({
          statusCode: 500,
          message: "Internal server error",
        });
    }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  });
}
/*****************************************SYNC CODES****************************************************/
function greet(params) {
  return "Hello";
}
function myExecution() {
  const a = 100;
  console.log({ a });
  let funresult = greet();
  console.log({ funresult });
  const b = 100;
  console.log({ b });
}

// myExecution();

/*****************************************ASYNC Func/CODES****************************************************/

function myExecution2() {
  const a = 100;
  console.log({ a });
  setTimeout(() => {
    console.log("Executed..........");
  }, 300);
  let funresult = greet();
  console.log({ funresult });

  const b = 100;
  console.log({ b });
}

// myExecution2();

/*****************************************Callback FUNCTION****************************************************/

function addTwo(a, b, fn) {
  setTimeout(() => {
    const sum = a + b;
    // throw new Error("OOps")
    fn(sum);
  }, 2000);
}

// addTwo(10, 20, (sum) => {
//   console.log({ sum });
// });

/*****************************************Callback Hell****************************************************/
// function addTwo(a, b, fn) {
//   setTimeout(() => {
//     const sum = a + b;
//     // throw new Error("OOps")
//     fn(sum);
//   }, 10);
// }

// addTwo(10, 20, (sum) => {
//   addTwo(sum, 30, (sum) => {
//     //
//     //
//     addTwo(sum, 40, (sum) => {
//       //
//       //
//       addTwo(sum, 50, (sum) => {
//         //
//         //
//         addTwo(sum, 60, (finalSum) => {
//           //
//           console.log({ finalSum });
//         });
//       });
//     });
//   });
// });

// ----------------------Ticket booking callback hell

// checkSeatAvail(seatNo, (isAvail) => {
//   if (isAvail) {
//     blockSeat(seatNo, (isBlocked) => {
//       if (isBlocked) {
//         proceddPay(seatNo, amout, (confirmed, seatNo) => {
//           if (confirmed) {
//             console.log("Yout ticket confirmed Ticket No. :", seatNo);
//           } else {
//             //
//           }
//         });
//       } else {
//         //
//       }
//     });
//   } else {
//     //
//   }
// });

//
//
//
//
/*****************************************PROMISE FUNCTION****************************************************/
// what is Promise: The Promise object represents the eventual completion (or failure) of an asynchronous
// operation and its resulting value.
// state of promise: Pending, Fulfilled, Reject

/*******************PROMISE CREATION*******************/
function myPromise(needSuccess = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needSuccess) {
        resolve({ users: [{}] });
      } else {
        reject({ error: "Internal Server Error" });
      }
    }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  });
}

//  ---------------- Promise vs ASYNC
async function GLOBAL_EXE1() {
  function myPromise(needSuccess = true) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (needSuccess) {
            resolve({ users: [{}] });
          } else {
            reject({ error: "Internal Server Error" });
          }
        }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
      } catch (error) {
        reject({ error: "Internal Server Error" });
      }
    });
  }

  function myAsync2(needSuccess = true) {
    setTimeout(() => {
      if (needSuccess) {
        return { users: [{}] };
      } else {
        return { error: "Internal Server Error" };
      }
    }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  }

  const r1 = await myAsync2(true);
  console.log({ r1 });
  const r2 = await myPromise(true);
  console.log("sss", { r2 });
}

GLOBAL_EXE1();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*******************async code with callback/promise(await and .then)/handling errors *******************/
// function addTwoPromise(num1, num2, needSuccess = true) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (needSuccess) {
//         const sum = num1 + num2;
//         resolve(sum);
//       } else {
//         reject({ error: "Internal Server Error" });
//       }
//     }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
//   });
// }

// async function addTwoCb(num1, num2, cb, needSuccess = true) {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     if (needSuccess) return cb(sum);
//     else throw new Error("Error...");
//   }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
// }
async function GLOBAL_EXE() {
  // -------------with callback-----------------
  // addTwoCb(10, 20, (firstSum) => {
  //   console.log({ firstSum });
  //   addTwoCb(firstSum, 30, (secondSum) => {
  //     console.log({ secondSum });
  //     addTwoCb(secondSum, 40, (thirdSum) => {
  //       console.log({ thirdSum });
  //     });
  //   });
  // });
  // -------------with .then-----------------
  // addTwoPromise(10, 20)
  //   .then((firstSum) => {
  //     console.log({ firstSum });
  //     return addTwoPromise(firstSum, 30);
  //   })
  //   .then((secondSum) => {
  //     console.log({ secondSum });
  //     return addTwoPromise(secondSum, 40);
  //   })
  //   .then((thirdSum) => {
  //     console.log({ thirdSum });
  //   });
  // -------------with await-----------------
  // const firstSum = await addTwoPromise(10, 20);
  // console.log({ firstSum });
  // const secondSum = await addTwoPromise(firstSum, 30);
  // console.log({ secondSum });
  // const thirdSum = await addTwoPromise(secondSum, 40);
  // console.log({ thirdSum });
  // -------------callback error handling-----------------
  // myFunction(num, function callback(err, result) {
  //   if (err) {
  //     return myFunction(num, callback);
  //   } else {
  //     //
  //   }
  // });
  // -------------promise .then error handling-----------------
  // addTwoPromise(10, 20, false)
  //   .then((firstSum) => {
  //     console.log({ firstSum });
  //     return addTwoPromise(firstSum, 30, false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     // return Promise.reject(err);
  //   })
  //   .then((secondSum) => {
  //     console.log({ secondSum });
  //     return addTwoPromise(secondSum, 40, false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     // return Promise.reject(err);
  //   })
  //   .then((thirdSum) => {
  //     console.log({ thirdSum });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     // return Promise.reject(err);
  //   });
  // -------------promise await error handling-----------------
  // try {
  //   const firstSum = await addTwoPromise(10, 20, false);
  //   console.log({ firstSum });
  //   const secondSum = await addTwoPromise(firstSum, 30, false);
  //   console.log({ secondSum });
  //   const thirdSum = await addTwoPromise(secondSum, 40, false);
  //   console.log({ thirdSum });
  // } catch (error) {
  //   console.log(error);
  // }
  // -------------------------------------------------------
}

// GLOBAL_EXE();

/*******************PROMISE USAGE*******************/

// ____________________________________________________________________
async function MyFunction() {
  // const res1 = await MyAPI("https://api.com/api/customer", {
  //   body: { success: true, custId: 101 },
  // });
  // const customerDetails = res1?.data;
  // const res2 = await MyAPI("https://api.com/api/customer/cart", {
  //   body: { success: true, custId: 101 },
  // });
  // const customerCart = res2?.data;
  // const res3 = await MyAPI("https://api.com/api/customer/wishlist", {
  //   body: { success: true, custId: 101 },
  // });
  // const customerWishlist = res3?.data;
  // const res4 = await MyAPI("https://api.com/api/customer/order", {
  //   body: { success: true, custId: 101 },
  // });
  // const customerOrders = res4?.data;
  // console.log({
  //   customerDetails,
  //   customerCart,
  //   customerWishlist,
  //   customerOrders,
  // });
  // ____________________________________________________________________
  // const [
  //   { value: { data: customerDetails } = {} },
  //   { value: { data: customerCart } = {} },
  //   { value: { data: customerWishlist } = {} },
  //   { value: { data: customerOrders } = {} },
  // ] = await Promise.allSettled([
  //   MyAPI("https://api.com/api/customer", {
  //     body: { success: true, custId: 101 },
  //   }),
  //   MyAPI("https://api.com/api/customer/cart", {
  //     body: { success: true, custId: 101 },
  //   }),
  //   MyAPI("https://api.com/api/customer/wishlist", {
  //     body: { success: false, custId: 101 },
  //   }),
  //   MyAPI("https://api.com/api/customer/orders", {
  //     body: { success: true, custId: 101 },
  //   }),
  // ]);
  // console.log({
  //   customerDetails,
  //   customerCart,
  //   customerWishlist,
  //   customerOrders,
  // });
  // ____________________________________________________________________
}

// MyFunction();

/**********************************************************************************************************/
