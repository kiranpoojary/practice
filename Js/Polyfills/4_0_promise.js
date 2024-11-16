function MyPromise(myFn) {
  let value;
  let error;
  let fulfilled = false;
  let rejected = false;
  let called = false;
  let onResolve;
  let onReject;
  let onFinally;

  function resolve(val) {
    value = val;
    fulfilled = true;
    if (!called && typeof onResolve == "function") {
      called = true;
      onResolve(value);
      if (onFinally) onFinally();
    }
  }

  function reject(err) {
    error = err;
    rejected = true;
    if (!called && typeof onReject == "function") {
      called = true;
      onReject(error);
      if (onFinally) onFinally();
    }
  }

  this.then = function (thenFn) {
    onResolve = thenFn;
    if (!called && fulfilled) {
      called = true;
      thenFn(value);
      if (onFinally) onFinally();
    }
    return this;
  };

  this.catch = function (catchFn) {
    onReject = catchFn;
    if (!called && rejected) {
      called = true;
      onReject(error);
      if (onFinally) onFinally();
    }
    return this;
  };

  this.finally = function (finallyFn) {
    onFinally = finallyFn;
    if (called) {
      onFinally();
    }
    return this;
  };

  myFn(resolve, reject);
}

const wish = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Hi");
  }, 1000);
});

wish
  .then((res) => {
    console.log(`Then    : ${res}`);
  })
  .catch((err) => console.log(`Catch    : ${err}`))
  .finally(() => {
    console.log(`Finaly.......`);
  });
