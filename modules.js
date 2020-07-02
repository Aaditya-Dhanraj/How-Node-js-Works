// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calculatorOne = new C();
console.log(calculatorOne.add(2, 5));

// exports
// const calculatorTwo = require("./test-module-2");
// console.log(calculatorTwo.multiply(2, 5));
const { add, sub, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
