const fs = require("fs");
const server = require("http").createServer();

// solution 1
server.on("request", (req, res) => {
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // });

  // solution 2
  // const readable = fs.createReadStream("test-file.txt");

  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });

  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File Not Found");
  // });

  // solution 3  using pipe operator

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});
// readableStream.pipe(WriteableDestination)

server.listen(8001, "127.0.0.1", () => {
  console.log("Listning.......");
});
