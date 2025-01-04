import axios from "axios";

export const getAllOrders = async (eventId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/order/list-orders?eventId=${eventId}`
    );
    return response.data.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error fetching orders",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
