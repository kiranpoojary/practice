// Debounce: Restrict abnormal/unnecessary expensive function call
// function call only when there is a delay between 2 call exceeds the specified delay
//usecase: in shooting game u can't continously fire if not a machine gun, there should be a delay btw 2 fire triggered.
function myDebounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function wish(i) {
  console.log(`Good Morning ${i}`);
}

console.log("------------------------ Without Debounce ---------------------");

for (let i = 0; i < 10; i++) {
  wish(i);
}

console.log("------------------------ With Debounce ---------------------");
const wish2 = myDebounce(wish, 300);
for (let i = 0; i < 10; i++) {
  wish2(i);
}
