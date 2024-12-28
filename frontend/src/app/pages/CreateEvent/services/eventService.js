import axios from "axios";

export const getEventType = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/eventtypes/get"
    );
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error fetching event types:", error);
    throw error; // Ném lỗi ra ngoài để xử lý nếu cần
  }
};
