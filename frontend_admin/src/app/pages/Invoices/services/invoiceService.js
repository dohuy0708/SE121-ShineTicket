import axios from "axios";

export const getAllOrders = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/order/list-orders"
    );
    return response.data.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error fetching events by user:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
