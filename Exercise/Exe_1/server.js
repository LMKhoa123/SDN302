//lưu ý là nodejs thuần chưa là express
const http = require('http');
//Đây là cách import module có sẵn trong Node.js (gọi là core module).
//Ở đây, http là module giúp bạn tạo web server.
//Vì là module gốc, nên không cần cài đặt bằng npm install.

// bao gồm http request và response
//http request bao gồm các thông tin như url, method, headers, body
//http response bao gồm các thông tin như status code, headers, body
//status code có 2: 200 OK
// Express là framework giúp làm những việc như trên nhanh và gọn hơn, không cần viết tay từng dòng như setHeader, statusCode...

//Note: review reactjs, js with es6
//Exe 1,2,3
//group project(đề tài, tìm hiểu nghiệp vụ/tổ chức dữ liệu(lưu trữ j)), tạo git chung, chuẩn bị web skeleton(dùng template và thiết kế lại))
const hostname="127.0.0.1";//là localhost, tức là server chỉ chạy trên máy của bạn.
const port=3000;//3000 là cổng mà server lắng nghe. Có thể thay đổi tùy ý.

//tạo server 
//http.createServer(callback) tạo một server mới.
/*(req, res) là 2 đối tượng quan trọng:

req: thông tin về request (yêu cầu) từ người dùng (ví dụ như truy cập một đường link).

res: dùng để trả về phản hồi (response) cho client.
*/
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');// kết thúc phản hồi và gửi nội dung về trình duyệt 
});

//Khởi động server:server.listen(...) cho server bắt đầu chạy, lắng nghe tại địa chỉ và cổng bạn đã chọn.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



