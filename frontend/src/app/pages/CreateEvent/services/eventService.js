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
    const formData = new FormData(); // Sử dụng FormData để gửi dữ liệu với file

    // Duyệt qua các thuộc tính của eventData và thêm vào FormData
    Object.keys(eventData).forEach((key) => {
      if (key === "tickets") {
        // Xử lý tickets: mảng vé (nếu có)
        eventData[key].forEach((ticket) => {
          formData.append("tickets[]", JSON.stringify(ticket)); // Mảng tickets
        });
      } else if (key === "logo_url" || key === "cover_image_url") {
        // Thêm file logo và cover image
        formData.append(key, eventData[key]);
      } else {
        // Thêm các trường còn lại vào FormData
        formData.append(key, eventData[key]);
      }
    });

    // Gửi dữ liệu với axios
    const response = await axios.post(
      "http://localhost:8080/api/event/create",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } } // Đảm bảo gửi đúng Content-Type cho form-data
    );

    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error(
      "Error creating event:",
      error.response?.data || error.message
    );
    throw error; // Ném lỗi để xử lý bên ngoài
  }
};
