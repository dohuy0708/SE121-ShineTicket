import axios from "axios";

// Hàm lấy danh sách tất cả sự kiện
export const getAllEvents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/event/list");
    console.log("lấy về: ", response.data.data);
    return response.data.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
  }
};
