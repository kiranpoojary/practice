function MyPromise(fn) {
  let value;
  let error;
  let fulFilled = false;
  let rejected = false;
  let called = false;
  let onResolve;
  let onReject;
  let onFinally;

  function resolve(val) {
    value = val;
    fulFilled = true;
    if (typeof onResolve == "function" && !called) {
      called = true;
      onResolve(value);
      onFinally();
    }
  }

  function reject(err) {
    error = err;
    rejected = true;
    if (typeof onReject == "function" && !called) {
      called = true;
      onReject(error);
      onFinally();
    }
  }

  this.then = function (thenCB) {
    onResolve = thenCB;
    if (!called && fulFilled) {
      called = true;
      thenCB(value);
    }
    return this;
  };

  this.catch = function (catchCB) {
    onReject = catchCB;
    if (!called && rejected) {
      called = true;
      catchCB(error);
    }
    return this;
  };

  this.finally = function (finallyCB) {
    onFinally = finallyCB;
    if (called) {
      onFinally();
      onFinally = null;
    }
  };
  fn(resolve, reject);
}

const aa = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "OK" });
    // reject({ message: "Error" });
  }, 1000);
});

aa.then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("ended.....");
  });
