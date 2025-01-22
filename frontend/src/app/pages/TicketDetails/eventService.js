import axios from "axios";

// Hàm lấy danh sách tất cả sự kiện
export const getEventById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/event/get?id=${id}`
    );
    console.log("lấy về: ", response.data.event);
    return response.data.event; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
  }
};
