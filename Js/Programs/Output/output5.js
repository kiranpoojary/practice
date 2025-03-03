const aa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "Hello" });
  }, 1000);
});

aa.then((res) => {
  throw new Error("Hoge111");
})
  .then((val) => {
    throw new Error("Hoge");
    // 2 * val
  })
  .catch((err) => console.log("--" + err))
  .finally(() => {
    console.log("ffff11");
  })
  .then((vv) => {
    console.log({ vv });
    return vv * vv;
  })
  .finally(() => {
    console.log("ffff22");
    return "lolooooooooooooo";
  })
  .catch((eew) => console.log("eew " + eew))
  .then((qq) => console.log({ qq }));
