import axios from "axios";

export const getAllEvent = async () => {
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
export const setWillOccureEvent = async (id) => {
  try {
    const response = await axios.put("http://localhost:8080/api/event/edit", {
      id: id,
      event_status_id: "675ea25872e40e87eb7dbf08",
    });
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error set occuring events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
export const setOccuringEvent = async (id) => {
  try {
    const response = await axios.put("http://localhost:8080/api/event/edit", {
      id: id,
      event_status_id: "675ea24172e40e87eb7dbf06",
    });
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error set occuring events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
export const setOccuredEvent = async (id) => {
  try {
    const response = await axios.put("http://localhost:8080/api/event/edit", {
      id: id,
      event_status_id: "675ea26172e40e87eb7dbf0a",
    });
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error set occuring events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
export const setRejectEvent = async (id) => {
  try {
    const response = await axios.put("http://localhost:8080/api/event/edit", {
      id: id,
      event_status_id: "676ece8250c4e95732edbadf",
    });
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error set occuring events:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm nếu cần
  }
};
