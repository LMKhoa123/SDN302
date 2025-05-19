const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hrllo");
});

server.listen(port, hostname, ()=>{
     console.log(`Server running at http://${hostname}:${port}/`);
})
//Node.js also allows you to make HTTP requests to other servers. This is useful when you want to consume APIs or access data from other websites.
