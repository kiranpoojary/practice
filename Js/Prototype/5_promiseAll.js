//Promise.all: this method takes array of promise
// throw an error if any one of the promise is rejected
// return array of resolved value only when all promises reoslved

function likeVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Liked" });
    }, 300);
  });
}

function commentVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Commented" });
    }, 300);
  });
}

Promise.myAll = function (promises = []) {
  return new Promise((resolve, reject) => {
    const result = [];
    if (promises.length == 0) {
      resolve(result);
    }
    let pending = promises.length;
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then((res) => {
        result[i] = res;
        --pending;
        // means all done
        if (pending == 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

// const ans = Promise.all([likeVideo(), commentVideo()]);
// ans.then((res) => console.log(res));

const ans = Promise.myAll([likeVideo(), commentVideo()]);
ans.then((res) => console.log(res));
