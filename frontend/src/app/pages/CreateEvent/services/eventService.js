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

export const postEvent = async (eventData) => {
  try {
    const formData = new FormData();

    Object.keys(eventData).forEach((key) => {
      if (key === "tickets") {
        // Chuyển tickets thành chuỗi JSON và gửi
        formData.append("tickets", JSON.stringify(eventData[key]));
      } else if (key === "logo_url" || key === "cover_image_url") {
        formData.append(key, eventData[key]);
      } else {
        formData.append(key, eventData[key]);
      }
    });

    // Gửi formData qua API

    const response = await axios.post(
      "http://localhost:8080/api/event/create",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error creating event:",
      error.response?.data || error.message
    );
    throw error;
  }
};
