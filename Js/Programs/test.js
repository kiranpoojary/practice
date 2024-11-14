function myPromise(executor) {
  let value;
  let error;
  let fulfilled = false;
  let rejected = false;
  let onResolve;
  let onReject;
  let called = false;

  function resolve(val) {
    value = val;
    fulfilled = true;
    if (typeof onResolve == "function" && !called) {
      called = true;
      onResolve(value);
    }
  }

  function reject(err) {
    error = err;
    rejected = true;
    if (typeof onResolve == "function" && !called) {
      called = true;
      onReject(error);
    }
  }

  this.then = function (thenCB) {
    onResolve = thenCB;
    if (!called && fulfilled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (catchCB) {
    onReject = catchCB;
    if (!called && rejected) {
      called = true;
      onReject(value);
    }
    return this;
  };
  executor(resolve, reject);
}

let wish = new myPromise((resolve, reject) => {
  resolve("No delay : Hiii");
});

wish
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("------------------------------------------");
let wishAfter1Sec = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Delayed  : Hiii");
  }, 1000);
});

wishAfter1Sec
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("End.......");
