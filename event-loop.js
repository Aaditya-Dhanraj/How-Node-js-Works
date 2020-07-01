const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // changing the threadpool size

setTimeout(() => console.log("timer finished 1"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log(".................");

  setTimeout(() => {
    console.log("timmer 2");
  }, 0);
  setTimeout(() => {
    console.log("timmer finished 3");
  }, 3000);

  setImmediate(() => console.log("imediate 2"));

  process.nextTick(() => console.log("nexttick processed"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted sync 1");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted sync 2");
});

console.log("hello from the top level code");
