function MyPromise(cb) {
  let value;
  let error;
  let onResolve;
  let onReject;
  let isResolved = false;
  let isRejected = false;
  let called = false;
  let onFinally;

  function resolve(val) {
    isResolved = true;
    value = val;
    if (typeof onResolve == "function" && !called) {
      onResolve(value);
      called = true;
      if (onFinally) onFinally();
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject == "function" && !called) {
      onReject(error);
      called = true;
      if (onFinally) onFinally();
    }
  }

  this.then = function (thenCB) {
    onResolve = thenCB;
    if (isResolved && !called) {
      thenCB(value);
      called = true;
    }
    return this;
  };

  this.catch = function (catchCB) {
    onReject = catchCB;
    if (isRejected && !called) {
      catchCB(error);
      called = true;
    }
    return this;
  };

  this.finally = function (finallyCB) {
    onFinally = finallyCB;
    if (called) {
      onFinally();
    }
    return this;
  };

  cb(resolve, reject);
}

const a = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  resolve(200);
  // reject(500);
  // }, 1000);
});

a.then((res) => console.log({ res }))
  .catch((err) => console.log({ err }))
  .finally(() => {
    console.log("DONE....");
  });

// const a = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(200);
//     // reject(500);
//   }, 500);
// });

// a.then((res) => console.log({ res }))
//   .catch((err) => console.log({ err }))
//   .finally(() => {
//     console.log("DONE....");
//   });
