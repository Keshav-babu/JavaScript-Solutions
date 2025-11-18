var createCounter = function (init) {
  let a = init;
  return {
    increment: function () {
      return ++a;
    },
    decrement: function () {
      return --a;
    },
    reset: function () {
      a = init;
      return a;
      // return init ❌ Only returns the starting number but does NOT reset the internal state.
    },
  };
};

let test = createCounter(10);
let a = test.increment();
let b = test.decrement();
let c = test.reset();

console.log("aaa", { a, b, c });
