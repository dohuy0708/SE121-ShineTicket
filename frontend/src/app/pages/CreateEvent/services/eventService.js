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
const dataURLtoFile = (dataurl, filename) => {
  // Tách phần header và data của base64 string
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const postEvent = async (eventData) => {
  try {
    const formData = new FormData();

    Object.keys(eventData).forEach((key) => {
      if (key === "tickets") {
        eventData[key].forEach((ticket) => {
          formData.append("tickets[]", JSON.stringify(ticket));
        });
      } else if (key === "logo_url" || key === "cover_image_url") {
        // Chuyển base64 thành File object
        if (eventData[key] && eventData[key].startsWith("data:")) {
          const file = dataURLtoFile(eventData[key], `${key}.png`);
          formData.append(key, file);
        }
      } else {
        formData.append(key, eventData[key]);
      }
    });

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
