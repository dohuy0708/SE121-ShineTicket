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
export const editOrder = async (orderId, updatedStatus) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/order/edit-order/?id=${orderId}`,
      {
        order_status_id: updatedStatus,
      }
    );
    console.log("sửa trạng thái thành công");
    return response.data;
  } catch (error) {
    console.error("Error editing order:", error);
    throw error;
  }
};
