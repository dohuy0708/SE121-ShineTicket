import bcrypt from "bcrypt";
import Users from "../models/user.js";

import {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} from "../middleware/JWT/Token.js";
import User from "../models/user.js";

// function encript password
const handleUserRegister = async (data) => {
  const { email } = data;
  try {
    // Kiểm tra user đã tồn tại chưa
    const acc = await User.findOne({ email });
    if (acc) {
      return {
        errCode: 1,
        message: "User already exists!",
      };
    }

    // Tạo user mới
    const newUser = await User.create({
      ...data, // Truyền toàn bộ dữ liệu từ input
    });

    return {
      errCode: 0,
      message: "Register success.",
      data: newUser,
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      errCode: 1,
      message: `Error: ${error.message}`, // Nối chuỗi để đưa lỗi ra response
    };
  }
};
const handleUserLogin = async (email, password) => {
  try {
    // Tìm user trong DB
    const user = await User.findOne({ email });
    if (!user) {
      return {
        errCode: 1,
        message: "Email does not exist!",
      };
    }

    // So sánh mật khẩu
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return {
        errCode: 1,
        message: "Password is incorrect!",
      };
    }

    // Tạo token
    const accessToken = createAccessToken(user._id); // Thay thế với hàm tạo access token
    const refreshToken = createRefreshToken(user._id); // Thay thế với hàm tạo refresh token

    return {
      errCode: 0,
      message: "Login successful!",
      user,
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      errCode: 1,
      message: error.message,
    };
  }
};

const listUser = async () => {
  try {
    const users = await User.find({});
    return {
      errCode: 0,
      message: "List user successfully.",
      data: users,
    };
  } catch (error) {
    console.error("Error  ", error.message);
    return {
      errCode: 1,
      message: "Unable to list user.",
    };
  }
};

let getUser = async (userid) => {
  try {
    const user = await User.findById(userid);
    if (!user) {
      return {
        errCode: 2,
        message: "User not found.",
      };
    }
    return {
      errCode: 0,
      message: "Success",
      user,
    };
  } catch (e) {
    console.error("Error:", e);
    return {
      errCode: 1,
      message: "Unable to get User.",
    };
  }
};
let createUser = (data) => {};

let editUser = async (data) => {
  try {
    const updateUser = await User.findByIdAndUpdate(data._id, data);
    if (!updateUser) {
      return {
        errCode: 1,
        message: "User not found.",
      };
    }

    return {
      errCode: 0,
      message: "Update user success",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      errCode: 1,
      message: "Error",
    };
  }
};

let deleteUser = async (userid) => {
  try {
    const updateUser = await User.findByIdAndDelete(userid);
    if (!updateUser) {
      return {
        errCode: 1,
        message: "User not found.",
      };
    }

    return {
      errCode: 0,
      message: "Delete  user success",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      errCode: 1,
      message: "Error",
    };
  }
};

export {
  handleUserLogin,
  getUser,
  createUser,
  editUser,
  deleteUser,
  handleUserRegister,
  listUser,
};
