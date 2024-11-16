function MysteryAsyncFunction() {
  //
}

MysteryAsyncFunction.prototype.then = function (onFulfilled) {
  setTimeout(() => onFulfilled("done"), 1000);
};

(async () => {
  const mystery = await new MysteryAsyncFunction();
  console.log(mystery);
})();

// console.log(typeof MysteryAsyncFunction().then);
