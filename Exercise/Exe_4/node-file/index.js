// var http = require("http");
// const fs = require('fs');
// const { readFile } = require('./file');

// const hostname = "localhost";
// const port = 8082;

// http.createServer(function (request, response) {
//   // Send the HTTP header
//   console.log(request.headers);

//   // Send the response body of file
//   const filename = 'index.html';

//   readFile(filename)
//     .then((data) => {
//       response.setHeader('Content-Type', 'text/html');
//       response.statusCode = 200;
//       // response.end(data);
//       // console.log("data: ",data);
//       fs.createReadStream(filename).pipe(response);//đọc nội dung file và gửi trực tiếp tới client nên là bỏ qua response.end
//     })
//     .catch((err) => {
//       console.error('Error reading file:', err);
//       response.statusCode = 500;
//       response.end('Internal Server Error');
//     });
// }).listen(port);

// // Console will print the message
// console.log(`Server running at http://${hostname}:${port}/`);


var http = require("http");
const path = require("path");
const { readFile } = require("./file"); 
const hostname = "localhost";
const port = 8082;

http.createServer(function (request, response) {
  // In ra thông tin header (để debug)
  console.log(request.headers);

  // Nếu là phương thức GET
  if (request.method == "GET") {
    var fileUrl;
    if (request.url == "/") fileUrl = "/index.html";
    else fileUrl = request.url;

    var filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);

    // Chỉ xử lý file có đuôi .html
    if (fileExt === ".html") {
      readFile(filePath)
        .then((data) => {
          response.setHeader("Content-Type", "text/html");
          response.statusCode = 200;
          console.log("file:", data);
          response.end(data);
        })
        .catch((err) => {
          console.error("Error reading file:", err);
          response.statusCode = 500;
          response.end("Internal Server Error");
        });
    } else {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/html");
      response.end(`<html><body><h1>404: ${request.method}  not supported</h1></body></html>`);
    }
  } else {
    // Nếu không phải GET
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end(`<html><body><h1>Error 404: ${request.method} not supported</h1></body></html>`);
  }
}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);

