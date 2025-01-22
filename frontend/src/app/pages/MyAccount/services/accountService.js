import axios from "axios";

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/user/get/${userId}`
    );
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    throw error.response ? error.response.data : error; // Ném lỗi cụ thể nếu có
  }
};

export const editUser = async (userData) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/api/user/edit",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra khi chỉnh sửa thông tin người dùng:", error);
    throw error;
  }
};
