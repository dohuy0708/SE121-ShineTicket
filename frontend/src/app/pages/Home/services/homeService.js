import axios from "axios";

export const getBanner = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/event/list_banner"
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

export const getSpecial = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/event/list_special"
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

export const getTrend = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/event/list_trend"
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
