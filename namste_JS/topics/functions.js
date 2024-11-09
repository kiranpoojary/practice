console.log("OK");

let a = 20;

function setA(aa) {
  setTimeout(() => {
    aa = 999;
    console.log(aa);
  }, 200);

  setTimeout(() => {
    console.log(aa);
  }, 2000);

  //   return bb;
}

setA(9);
