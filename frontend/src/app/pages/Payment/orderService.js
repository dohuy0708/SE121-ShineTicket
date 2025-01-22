// orderService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/order"; // Thay bằng URL API của bạn

export const createOrder = async (orderForm) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/create-order`,
      orderForm
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/delete-order/?id=${orderId}`
    );
    console.log("xóa thành công");
    return response.data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};

export const editOrder = async (orderId, updatedStatus) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/edit-order/?id=${orderId}`,
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
