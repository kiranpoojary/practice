function myPromise(executor) {
  let value;
  let error;
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;

  function resolve(result) {
    isFulfilled = true;
    value = result;
    if (typeof onResolve == "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject == "function" && !isCalled) {
      onReject(error);
      isCalled = true;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  executor(resolve, reject);
}

const wish = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Hi`);
  }, 1000);
});

wish.then((res) => {
  console.log(res);
});
