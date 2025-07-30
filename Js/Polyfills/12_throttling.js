// Throttling: useful to restrict abnormal/unnecessary expensive function call
// function calls on each interval of time, and ignore the calls between the interval.
// throttle calls first time then after each interval if invoked
//usecase:

console.log(
  "\n************************************** Debouncing *****************************************"
);
function throttler(fn, delay) {
  let lastExecuted = 0;
  let timeoutId;

  return function () {
    const now = Date.now();
    const remaining = delay - (now - lastExecuted);
    if (remaining <= 0) {
      clearTimeout(timeoutId);
      lastExecuted = now;
      fn(...arguments);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecuted = Date.now();
        fn(...arguments);
      }, remaining);
    }
  };
}

function searchProduct(searchTxt) {
  console.log(`searching for: ${searchTxt}`);
}

const throttledProductSearch = throttler(searchProduct, 300);
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const str = "SAMSUNG GALEXY NOTE 5 PRO";

console.log("----------- Search Without Throttling---------------");
for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    await wait(300);
  } else searchProduct(str.slice(0, i + 1));
}

console.log("------------ Search With Throttling-----------------");

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    await wait(200);
  } else throttledProductSearch(str.slice(0, i + 1));
}
