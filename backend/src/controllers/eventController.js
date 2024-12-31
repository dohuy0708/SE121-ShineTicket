import {
  createEvent,
  deleteEvent,
  getEventById,
  listEvents,
  listEventsByUser,
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
  const result = await listEvents(req.query); // Lấy danh sách sự kiện với tham số lọc
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleListEventsByUser = async (req, res) => {
  const userId = req.body._id;
  const result = await listEventsByUser(userId); // Lấy danh sách sự kiện
  return res.status(result.errCode === 0 ? 200 : 400).json(result); // Trả về kết quả
};
const handleCreateEvent = async (req, res) => {
  try {
    const eventData = req.body; // Lấy dữ liệu sự kiện từ request body
    const files = req.files; // Lấy dữ liệu file từ Multer

    // Kiểm tra file bắt buộc và xử lý ảnh nếu có
    let logoUrlPath = null;
    let coverImageUrlPath = null;

    if (files) {
      if (files.logo_url) {
        logoUrlPath = files.logo_url[0].filename; // Đường dẫn ảnh logo
      }

      if (files.cover_image_url) {
        coverImageUrlPath = files.cover_image_url[0].filename; // Đường dẫn ảnh cover image
      }
    }

    // Thêm thông tin file vào dữ liệu sự kiện, chỉ thêm ảnh nếu có
    const newEvent = {
      ...eventData,
      logo_url: logoUrlPath || null, // Nếu không có logo, để null
      cover_image_url: coverImageUrlPath || null, // Nếu không có cover image, để null
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
  handleListEventsByUser,
};
