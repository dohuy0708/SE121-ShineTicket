import express from "express";
import bodyParser from "body-parser";
// thư viện hỗ trợ lấy các tham số từ client gửi.  vd :query param
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import dotenv from "dotenv"; // Sử dụng import

dotenv.config(); // Gọi config

// config app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
//

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Sever is running on port ", port);
});
