import axios from "axios";

export const handleLogin = async (email, password) => {
  console.log("em:", email, " pss: ", password);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/login",
      { email, password }, // Dữ liệu gửi trong body
      {
        headers: {
          "Content-Type": "application/json", // Sử dụng JSON format cho body
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const handleSignUp = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/register",
      userData
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    throw error;
  }
};
