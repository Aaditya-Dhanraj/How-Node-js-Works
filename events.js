const EventEmitter = require("events");
const http = require("http");

class sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new sales();

myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Aaditya");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in the stock`);
});

myEmitter.emit("newSale", 9);

//////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request recieved");
  res.end("request accepted");
});

server.on("request", (req, res) => {
  console.log("request recieved 2");
});

server.on("close", (req, res) => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listning on port 8000");
});
