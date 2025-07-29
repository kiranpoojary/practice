// Throttling: useful to restrict abnormal/unnecessary expensive function call
// function calls only when there is a delay between 2 call exceeds the specified delay
// debounce don't calls first time, calls when delay between 2 key strokrd exceeds specified delay
//usecase: in shooting game u can't continously fire if not a machine gun, there should be a delay btw 2 fire triggered.
console.log(
  "\n************************************** Debouncing *****************************************"
);
function debouncer(fn, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      return fn(...arguments);
    }, delay);
  };
}

function searchProduct(searchTxt) {
  console.log(`searching for: ${searchTxt}`);
}

const debouncedSearchProduct = debouncer(searchProduct, 300);
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const str = "SAMSUNG GALEXY NOTE 5 PRO";

console.log("----------- Search Without Debouncing---------------");
for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    await wait(300);
  } else searchProduct(str.slice(0, i + 1));
}

console.log("------------ Search With Debouncing-----------------");

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    await wait(300);
  } else debouncedSearchProduct(str.slice(0, i + 1));
}
