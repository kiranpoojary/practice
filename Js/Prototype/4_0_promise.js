console.log(
  "\n************************************** Promise *****************************************"
);

//Way - 1
function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true; // Set to true, once the promise is resolved
    value = val; //Resolved value is now assigned
    // For asynchronous executor function only
    // Callback value is assigned to onResolve only when promise is not yet resolved
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true; // Set to true when the function is called
    }
  }

  function reject(val) {
    isRejected = true; // Set to true, once the promise is resolved
    value = val; //Rejected value is now assigned
    // For asynchronous executor function only
    // Callback value is assigned to onReject only when promise is not yet rejected
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true; // Set to true when the function is called
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    // Only for synchronous executor operation
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    // Only for synchronous executor operation
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

const promiseObj = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: "OK" });
    // reject({ msg: null });
  }, 2000);
});
promiseObj
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// const aa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 2000);
// });

// aa.then((val) => console.log({ val }));
