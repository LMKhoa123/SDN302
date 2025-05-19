
// PHẦN 2: TẠO HTTP CLIENT -giả lập 1 frontend gửi req
// Mục tiêu: Tạo một client gửi HTTP request đến một server (ví dụ như http://127.0.0.1:3000) để nhận dữ liệu phản hồi.
//🧩 Khái niệm:
// Client là phía gửi yêu cầu (request) đến một địa chỉ server (hostname + port). Server sẽ tiếp nhận, xử lý và phản hồi (response) lại dữ liệu.
//Có hai cách tạo HTTP Client trong Node.js:http.request() (THUẦN NODE) và Dùng axios (THƯ VIỆN NGOÀI)
//  Khi nào nên dùng cái nào?
// ➕ Dùng axios khi:
// Bạn cần gửi HTTP request nhanh, gọn.

// Làm việc với REST API (GET/POST/PUT/DELETE).

// Dự án thực tế cần tính mở rộng, dễ bảo trì.

// ➖ Dùng http.request() khi:
// Bạn cần hiểu rõ cách hoạt động thấp của Node.js.

// Viết module thuần không muốn phụ thuộc thư viện ngoài.

// Làm bài tập, thi, hoặc tối ưu ở mức thấp.


//Gửi HTTP GET request
const http = require("http");

//ví dụ bên client gửi về
const options ={
    hostname:"127.0.0.1",
    port:3000,
    path:"/",
    method:"GET"

}

//tiếp nhận request
const req = http.request(options, res =>{
  console.log(`statusCode: ${res.statusCode}`)

  res.on("data", d =>{
    process.stdout.write(d);
  })
})

req.on("error",error =>{
  console.error(error);
})

//cách 2: nhớ npm install axios
// const axios = require('axios');

// const axios = require("axios");

// axios.get('http://127.0.0.1:3000')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
