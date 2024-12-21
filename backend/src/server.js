import express from "express";
import bodyParser from "body-parser";
// thư viện hỗ trợ lấy các tham số từ client gửi.  vd :query param
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import cors from "cors"; // Import thư viện cors
import dotenv from "dotenv"; // Sử dụng import
import cookieParser from "cookie-parser";
import Database from "./config/InitDB.js";

dotenv.config(); // Gọi config

// config app
const app = express();
// Thiết lập CORS để cho phép các yêu cầu từ 'http://localhost:3000'
app.use(
  cors({
    origin: "http://localhost:3000", // Thay bằng URL của ứng dụng React của bạn
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);

//   DB connection
// db connetion
Database.getInstance();

initWebRoutes(app);
//

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Sever is running on port ", port);
});

app.post("/refresh_token", async (req, res) => {
  const token = req.cookies.refreshtoken;
  if (!token) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  try {
    // Xác thực refresh token
    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    // Lấy thông tin user từ database
    const user = await User.findById(payload.userId);
    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // Tạo AccessToken mới
    const newAccessToken = createAccessToken(user._id);
    res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (err) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
});
