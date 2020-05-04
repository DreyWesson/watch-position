// function sum(a, b) {
//   const c = a + b;
//   const total = `Sum = ${c}`;
//   return total;
// }
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
function uppercase(str, callback) {
  callback(str.toUpperCase());
}
const hello = (name) => `Hello ${name}`;
const cloneArray = (array) => [...array];
const createMethod = {
  make: () => "Make stuffs",
};
function createMeth() {
  this.make = function () {
    return "Make stuffs";
  };
}
module.exports = {
  sum,
  mul,
  sub,
  div,
  uppercase,
  hello,
  cloneArray,
  createMethod,
  createMeth,
};
// module.exports = sum;
