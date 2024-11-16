// Throttling: useful to restrict abnormal/unnecessary expensive function call
// function calls on each interval of time, and ignore the calls between the interval.
// throttle calls first time then after each interval if invoked
//usecase:

console.log(
  "\n************************************** Throttling *****************************************"
);
function myThrottle(cb, delay) {
  let lastCalledTime = 0; // 0 means 9970 its last called, so u have to call first
  return function (...args) {
    let nowTime = new Date().getTime();
    if (nowTime - lastCalledTime < delay) return;
    else {
      lastCalledTime = nowTime; // 9970 to curr date time
      cb(...args);
    }
  };
}

function wish(i) {
  console.log(`Good Morning ${i}`);
}

console.log(
  "------------------------ Without throttling ---------------------"
);

for (let i = 0; i < 12000; i++) {
  wish(i);
}

console.log("------------------------ With throttling ---------------------");
const wish2 = myThrottle(wish, 2); // 2 milis of delay
for (let i = 0; i < 12000; i++) {
  wish2(i);
}
