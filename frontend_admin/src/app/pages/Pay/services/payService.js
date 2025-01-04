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

export const createRefund = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/refund/create_refund",
      {
        event_id: data.event_id,
        organizer_id: data.organizer_id,
        total_amount: data.total_amount,
        refund_amount: data.refund_amount,
        commission: data.commission,
        refund_date: data.refund_date,
      }
    );
    return response.data.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error fetching events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
