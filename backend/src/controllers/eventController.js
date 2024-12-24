import {
  createEvent,
  deleteEvent,
  getEventById,
  listEvents,
  updateEvent,
} from "../services/eventService.js";

const handleGetEvent = async (req, res) => {
  let id = req.body.id;
  let result;
  result = await getEventById(id); // Lấy sự kiện theo id
  // Trả về kết quả dựa trên kết quả từ service
  return res.status(result.errCode === 0 ? 200 : 400).json(result);
};

const handleListEvents = async (req, res) => {
  const result = await listEvents(); // Lấy danh sách sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleCreateEvent = async (req, res) => {
  try {
    const eventData = req.body; // Lấy dữ liệu sự kiện từ request body
    const files = req.files; // Lấy dữ liệu file từ Multer

    // Kiểm tra file bắt buộc
    if (!files || !files.logo_url || !files.cover_image_url) {
      return res.status(400).json({
        errCode: 1,
        message: "Thiếu file logo_url hoặc cover_image_url",
      });
    }

    // Lấy đường dẫn của file đã upload
    const logoUrlPath = files.logo_url[0].filename; // Đường dẫn ảnh logo
    const coverImageUrlPath = files.cover_image_url[0].filename; // Đường dẫn ảnh cover image

    // Thêm thông tin file vào dữ liệu sự kiện
    const newEvent = {
      ...eventData,
      logo_url: logoUrlPath,
      cover_image_url: coverImageUrlPath,
    };

    // Gọi service để tạo sự kiện
    const result = await createEvent(newEvent);

    // Trả về kết quả
    return res.status(result.errCode === 0 ? 200 : 400).json(result);
  } catch (error) {
    return res.status(500).json({
      errCode: -1,
      message: "Lỗi server khi tạo sự kiện",
      error: error.message,
    });
  }
};

const handleEditEvent = async (req, res) => {
  const eventId = req.body.id; // Lấy id sự kiện từ URL params
  const eventData = req.body; // Dữ liệu chỉnh sửa từ request body

  const result = await updateEvent(eventId, eventData); // Gọi service để cập nhật sự kiện

  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

const handleDeleteEvent = async (req, res) => {
  const eventId = req.body.id; // Lấy id sự kiện từ URL params
  const result = await deleteEvent(eventId); // Gọi service để xóa sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};

export {
  handleGetEvent,
  handleCreateEvent,
  handleDeleteEvent,
  handleEditEvent,
  handleListEvents,
};
