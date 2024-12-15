const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Định nghĩa một route
// app.use("/api/v1", require(""));

// Tạo server HTTP và sử dụng Express làm trình xử lý
const server = http.createServer(app);

// Lắng nghe trên cổng 8000
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
