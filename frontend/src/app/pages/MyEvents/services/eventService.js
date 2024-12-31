import axios from "axios";

export const getEventsByUser = async (_id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/event/get_by_user`,
      {
        params: { _id: _id }, // Gửi _id như một query parameter
      }
    );
    console.log("dataa: ", response.data.events);
    return response.data.events; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error fetching events by user:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
