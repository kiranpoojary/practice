const myData = Array(75).fill({ roomName: "Hello World", costPrice: 34743 });

getSummaryTables(myData);
function getSummaryTables(myData) {
  let pageTableString = "";
  let isFirstPage = true;
  const initialPageRowSize = 16;
  const subsequentPageRowSize = 19;

  for (let index = 0; index < myData.length; ) {
    const pageRowSize = isFirstPage
      ? initialPageRowSize
      : subsequentPageRowSize;

    // Start a new table for each page
    pageTableString += `<div class="room-summary-table">
    <table aria-describedby="room-summary">
        <tr>
            <th>SL No</th>
            <th>Room Name</th>
            <th>Cost Per Room</th>
        </tr>`;

    // Slice the data for the current page
    const pageRows = myData.slice(index, index + pageRowSize);

    for (let pageRowIndex = 0; pageRowIndex < pageRows.length; pageRowIndex++) {
      const { roomName = "NA", costPrice = "NA" } = pageRows[pageRowIndex];
      pageTableString += `<tr>`;
      pageTableString += `<td>${index + pageRowIndex + 1}</td>`;
      pageTableString += `<td>${roomName}</td>`;
      pageTableString += `<td>${costPrice}</td>`;
      pageTableString += `</tr>`;
    }

    // Close the current table and prepare for the next page
    pageTableString += `</table></div>`;
    if (index + pageRowSize < myData.length) {
      pageTableString += `<div style="page-break-before: always;"></div>`;
    }

    // Move the index to the next set of rows and mark subsequent pages
    index += pageRowSize;
    isFirstPage = false;
  }

  return pageTableString;
}

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
function MyExecutions() {
  const a = 100;
  const b = 200;
  const c = 300;
  console.log({ a });
  function greet(name) {
    console.log({ name });
    console.log(`Hello ${name}:- from function`);
    return `NAME : ${name}`;
  }
  console.log({ b });
  console.log({ c });
  const d = 400;
  const returnValue = greet("Kiran");
  console.log({ returnValue });
  console.log({ d });
}

// MyExecutions();
/*****************************************ASYNC CODES****************************************************/
// In JavaScript, whether a function is synchronous or asynchronous is determined by its behavior
// and not by any specific keyword in the function definition. However, the async keyword is used to
// explicitly mark a function as asynchronous, and it allows the function to use the await keyword inside its body
async function MyExecutions2() {
  const a = 100;
  const b = 200;
  const c = 300;
  console.log({ a });
  async function greet(name) {
    setTimeout(() => {
      return `Hello ${name}`;
    }, 1000);
    // return `Hello ${name}`;
  }
  async function getUsers(name) {
    const result = await fetch(
      "https://api.github.com/users?pagr=1&per_page=100"
    ).then((resp) => resp.json());
    return result;
  }

  const myapi_rep = await MyAPI("https://api.com/api/customer/order", {
    body: { success: true, custId: 101 },
    ms: 0,
  });
  console.log({ myapi_rep });
  console.log({ b });
  console.log({ c });
  const d = 400;
  const myGreet = await greet("Kiran");
  console.log({ myGreet });
  const myUsers = await getUsers();
  console.log({ myUsers });
  console.log({ d });
}

// MyExecutions2();
/*****************************************Callback FUNCTION****************************************************/
// callback function
// callback hell

/*****************************************PROMISE FUNCTION****************************************************/
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

// async function GLOBAL_EXE() {
//   const mm = myPromise(true);
//   console.log({ mm });
// }

// GLOBAL_EXE();

/*******************async code with callback/promise(await and .then)/handling errors *******************/
function addTwoPromise(num1, num2, needSuccess = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needSuccess) {
        const sum = num1 + num2;
        resolve(sum);
      } else {
        reject({ error: "Internal Server Error" });
      }
    }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  });
}

async function addTwoCb(num1, num2, cb, needSuccess = true) {
  setTimeout(() => {
    const sum = num1 + num2;
    if (needSuccess) return cb(sum);
    else throw new Error("Error...");
  }, Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
}
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

GLOBAL_EXE();

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
