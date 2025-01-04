import axios from "axios";

export const getEventPay = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/event/list");
    console.log("dataa: ", response.data.data);
    return response.data.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error fetching events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
