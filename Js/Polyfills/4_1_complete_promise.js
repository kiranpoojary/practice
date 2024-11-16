function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    return new MyPromise((resolve, reject) => {
      onResolve = (val) => {
        try {
          const result = callback(val);
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (isFulfilled && !isCalled) {
        isCalled = true;
        onResolve(value);
      }
    });
  };

  this.catch = function (callback) {
    return new MyPromise((resolve, reject) => {
      onReject = (val) => {
        try {
          const result = callback(val);
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (isRejected && !isCalled) {
        isCalled = true;
        onReject(value);
      }
    });
  };

  // Add `finally` method
  this.finally = function (callback) {
    return new MyPromise((resolve, reject) => {
      const onFinal = () => {
        // Ensure callback runs and pass through original value or error
        const result = callback();
        if (result instanceof MyPromise) {
          result
            .then(() => {
              if (isFulfilled) {
                resolve(value);
              } else {
                reject(value);
              }
            })
            .catch(reject);
        } else {
          if (isFulfilled) {
            resolve(value);
          } else {
            reject(value);
          }
        }
      };

      if (isFulfilled) {
        onFinal();
      } else if (isRejected) {
        onFinal();
      } else {
        this.then(onFinal).catch(onFinal);
      }
    });
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// Example usage
const promiseObj = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

promiseObj
  .then((result) => {
    console.log(result); // "Data received"
    return "Next result";
  })
  .finally(() => {
    console.log("Finally called!"); // This will run after resolution
  })
  .then((nextResult) => {
    console.log(nextResult); // "Next result"
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });
